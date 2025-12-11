/**
 * Logger utility for Next.js 16
 * Provides structured logging with levels, context, and sanitization
 */

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface LogContext {
  component?: string;
  action?: string;
  userId?: string;
  requestId?: string;
  [key: string]: unknown;
}

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: LogContext;
  data?: Record<string, unknown>;
  error?: {
    name: string;
    message: string;
    stack?: string;
  };
}

// Sensitive field patterns to redact
const SENSITIVE_PATTERNS = [
  /password/i,
  /secret/i,
  /token/i,
  /api[_-]?key/i,
  /auth/i,
  /credential/i,
  /private/i,
  /ssn/i,
  /credit[_-]?card/i,
];

/**
 * Sanitize data by redacting sensitive fields
 */
function sanitize(obj: unknown, depth = 0): unknown {
  if (depth > 10) return '[MAX_DEPTH]';
  
  if (obj === null || obj === undefined) return obj;
  
  if (typeof obj === 'string') {
    // Truncate long strings
    return obj.length > 1000 ? obj.substring(0, 1000) + '...[truncated]' : obj;
  }
  
  if (typeof obj !== 'object') return obj;
  
  if (Array.isArray(obj)) {
    return obj.slice(0, 50).map(item => sanitize(item, depth + 1));
  }
  
  const sanitized: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
    const isSensitive = SENSITIVE_PATTERNS.some(pattern => pattern.test(key));
    if (isSensitive) {
      sanitized[key] = '[REDACTED]';
    } else {
      sanitized[key] = sanitize(value, depth + 1);
    }
  }
  return sanitized;
}

/**
 * Format log entry for output
 */
function formatLogEntry(entry: LogEntry): string {
  return JSON.stringify(entry);
}

/**
 * Get current log level from environment
 */
function getLogLevel(): LogLevel {
  const level = process.env.LOG_LEVEL?.toLowerCase();
  if (level === 'debug' || level === 'info' || level === 'warn' || level === 'error') {
    return level;
  }
  return process.env.NODE_ENV === 'production' ? 'info' : 'debug';
}

const LOG_LEVELS: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

function shouldLog(level: LogLevel): boolean {
  const currentLevel = getLogLevel();
  return LOG_LEVELS[level] >= LOG_LEVELS[currentLevel];
}

/**
 * Core logging function
 */
function log(
  level: LogLevel,
  message: string,
  context?: LogContext,
  data?: Record<string, unknown>,
  error?: Error
): void {
  if (!shouldLog(level)) return;

  const entry: LogEntry = {
    timestamp: new Date().toISOString(),
    level,
    message,
  };

  if (context && Object.keys(context).length > 0) {
    entry.context = context;
  }

  if (data && Object.keys(data).length > 0) {
    entry.data = sanitize(data) as Record<string, unknown>;
  }

  if (error) {
    entry.error = {
      name: error.name,
      message: error.message,
      stack: process.env.NODE_ENV !== 'production' ? error.stack : undefined,
    };
  }

  const output = formatLogEntry(entry);

  switch (level) {
    case 'error':
      console.error(output);
      break;
    case 'warn':
      console.warn(output);
      break;
    default:
      console.log(output);
  }
}

/**
 * Logger class for scoped logging with persistent context
 */
export class Logger {
  private context: LogContext;

  constructor(context: LogContext = {}) {
    this.context = context;
  }

  /**
   * Create a child logger with additional context
   */
  child(additionalContext: LogContext): Logger {
    return new Logger({ ...this.context, ...additionalContext });
  }

  /**
   * Log at debug level
   */
  debug(message: string, data?: Record<string, unknown>): void {
    log('debug', message, this.context, data);
  }

  /**
   * Log at info level
   */
  info(message: string, data?: Record<string, unknown>): void {
    log('info', message, this.context, data);
  }

  /**
   * Log at warn level
   */
  warn(message: string, data?: Record<string, unknown>): void {
    log('warn', message, this.context, data);
  }

  /**
   * Log at error level
   */
  error(message: string, error?: Error | unknown, data?: Record<string, unknown>): void {
    const err = error instanceof Error ? error : undefined;
    const extraData = error instanceof Error ? data : { ...(data || {}), errorValue: error };
    log('error', message, this.context, extraData, err);
  }

  /**
   * Log HTTP request (useful for API routes and server actions)
   */
  request(
    method: string,
    url: string,
    statusCode?: number,
    durationMs?: number,
    extra?: Record<string, unknown>
  ): void {
    const level: LogLevel = statusCode && statusCode >= 400 ? 'warn' : 'info';
    log(level, 'HTTP Request', this.context, {
      method,
      url,
      statusCode,
      durationMs,
      ...extra,
    });
  }

  /**
   * Log database operations
   */
  db(operation: string, table: string, durationMs?: number, extra?: Record<string, unknown>): void {
    log('debug', 'Database Operation', this.context, {
      operation,
      table,
      durationMs,
      ...extra,
    });
  }

  /**
   * Log external API calls
   */
  external(service: string, endpoint: string, statusCode?: number, durationMs?: number): void {
    const level: LogLevel = statusCode && statusCode >= 400 ? 'warn' : 'debug';
    log(level, 'External API Call', this.context, {
      service,
      endpoint,
      statusCode,
      durationMs,
    });
  }

  /**
   * Log performance metrics
   */
  perf(operation: string, durationMs: number, extra?: Record<string, unknown>): void {
    const level: LogLevel = durationMs > 5000 ? 'warn' : 'debug';
    log(level, 'Performance', this.context, {
      operation,
      durationMs,
      ...extra,
    });
  }

  /**
   * Log user actions (for audit trails)
   */
  audit(action: string, userId: string, resource: string, extra?: Record<string, unknown>): void {
    log('info', 'Audit', { ...this.context, userId }, {
      action,
      resource,
      ...extra,
    });
  }

  /**
   * Start a timer for measuring duration
   */
  startTimer(): () => number {
    const start = performance.now();
    return () => Math.round(performance.now() - start);
  }
}

// Default logger instance
export const logger = new Logger();

// Convenience exports for quick logging
export const debug = (message: string, data?: Record<string, unknown>) => logger.debug(message, data);
export const info = (message: string, data?: Record<string, unknown>) => logger.info(message, data);
export const warn = (message: string, data?: Record<string, unknown>) => logger.warn(message, data);
export const error = (message: string, err?: Error | unknown, data?: Record<string, unknown>) => 
  logger.error(message, err, data);

/**
 * Generate a unique request ID
 */
export function generateRequestId(): string {
  return `req_${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Extract client info from headers (for proxy/middleware use)
 */
export function extractClientInfo(headers: Headers): Record<string, string> {
  const ip = headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
             headers.get('x-real-ip') ||
             'unknown';
  
  return {
    ip: ip.replace('::ffff:', ''),
    userAgent: (headers.get('user-agent') || 'unknown').substring(0, 200),
    referer: headers.get('referer') || 'direct',
    origin: headers.get('origin') || '',
    acceptLanguage: headers.get('accept-language') || '',
  };
}
