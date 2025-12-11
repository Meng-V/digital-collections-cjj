import { NextRequest, NextResponse } from 'next/server';
import { Logger, generateRequestId, extractClientInfo } from './lib/logger';

/**
 * Proxy handler for Next.js 16
 * Replaces the deprecated middleware.ts convention
 */
export async function proxy(request: NextRequest) {
  const requestId = generateRequestId();
  const startTime = performance.now();
  
  const { method, url } = request;
  const clientInfo = extractClientInfo(request.headers);
  
  // Create a logger with request context
  const log = new Logger({
    component: 'proxy',
    requestId,
  });

  // Basic request data
  const logData: Record<string, unknown> = {
    method,
    url,
    ...clientInfo,
  };

  // For mutation requests, capture additional details
  if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) {
    const contentType = request.headers.get('content-type') || '';
    const contentLength = request.headers.get('content-length') || '0';
    
    logData.contentType = contentType;
    logData.contentLength = contentLength;
    logData.accept = request.headers.get('accept') || '';
    logData.origin = request.headers.get('origin') || '';
    logData.authorization = request.headers.get('authorization') ? '[PRESENT]' : '[ABSENT]';
    logData.csrfToken = request.headers.get('x-csrf-token') ? '[PRESENT]' : '[ABSENT]';
    
    // Log request body for JSON and form data
    if (contentType.includes('application/json') || contentType.includes('application/x-www-form-urlencoded')) {
      try {
        const cloned = request.clone();
        const body = await cloned.text();
        
        // Sanitize and truncate body
        let sanitizedBody = body.substring(0, 1000);
        sanitizedBody = sanitizedBody.replace(/"password":\s*"[^"]*"/gi, '"password":"[REDACTED]"');
        sanitizedBody = sanitizedBody.replace(/"token":\s*"[^"]*"/gi, '"token":"[REDACTED]"');
        sanitizedBody = sanitizedBody.replace(/"secret":\s*"[^"]*"/gi, '"secret":"[REDACTED]"');
        sanitizedBody = sanitizedBody.replace(/"key":\s*"[^"]*"/gi, '"key":"[REDACTED]"');
        sanitizedBody = sanitizedBody.replace(/password=[^&]*/gi, 'password=[REDACTED]');
        sanitizedBody = sanitizedBody.replace(/token=[^&]*/gi, 'token=[REDACTED]');
        sanitizedBody = sanitizedBody.replace(/secret=[^&]*/gi, 'secret=[REDACTED]');
        
        logData.requestBody = sanitizedBody;
        logData.bodySize = body.length;
        
        // Parse and count fields
        if (contentType.includes('application/json')) {
          try {
            const parsed = JSON.parse(body);
            logData.fieldCount = Object.keys(parsed).length;
            logData.fields = Object.keys(parsed);
          } catch {
            logData.parseError = 'Invalid JSON';
          }
        }
        
        if (contentType.includes('application/x-www-form-urlencoded')) {
          const params = new URLSearchParams(body);
          logData.fieldCount = Array.from(params.keys()).length;
          logData.fields = Array.from(params.keys());
        }
      } catch {
        logData.bodyError = 'Failed to read request body';
      }
    }
  }

  // Log the request
  log.info('Incoming request', logData);

  // Create response and add request ID header for tracing
  const response = NextResponse.next();
  response.headers.set('x-request-id', requestId);
  
  // Log duration
  const duration = Math.round(performance.now() - startTime);
  log.perf('proxy', duration);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)  
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
