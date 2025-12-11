'use client';

/**
 * Client-side logger for Next.js 16
 * Sends logs to server endpoint for centralized logging
 */

export type ClientLogLevel = 'debug' | 'info' | 'warn' | 'error';

interface ClientLogEntry {
  level: ClientLogLevel;
  message: string;
  component?: string;
  action?: string;
  data?: Record<string, unknown>;
  error?: {
    name: string;
    message: string;
    stack?: string;
  };
  url?: string;
  userAgent?: string;
  timestamp: string;
}

// Queue for batching logs
let logQueue: ClientLogEntry[] = [];
let flushTimeout: ReturnType<typeof setTimeout> | null = null;

const FLUSH_INTERVAL = 5000; // 5 seconds
const MAX_QUEUE_SIZE = 10;

/**
 * Flush queued logs to server
 */
async function flushLogs(): Promise<void> {
  if (logQueue.length === 0) return;

  const logsToSend = [...logQueue];
  logQueue = [];

  try {
    await fetch('/api/logs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ logs: logsToSend }),
    });
  } catch {
    // If sending fails, log to console as fallback
    logsToSend.forEach(log => {
      console.log('[ClientLog]', JSON.stringify(log));
    });
  }
}

/**
 * Schedule flush with debouncing
 */
function scheduleFlush(): void {
  if (flushTimeout) clearTimeout(flushTimeout);
  
  if (logQueue.length >= MAX_QUEUE_SIZE) {
    flushLogs();
  } else {
    flushTimeout = setTimeout(flushLogs, FLUSH_INTERVAL);
  }
}

/**
 * Core client logging function
 */
function log(
  level: ClientLogLevel,
  message: string,
  component?: string,
  action?: string,
  data?: Record<string, unknown>,
  error?: Error
): void {
  const entry: ClientLogEntry = {
    level,
    message,
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : undefined,
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
  };

  if (component) entry.component = component;
  if (action) entry.action = action;
  if (data) entry.data = data;
  if (error) {
    entry.error = {
      name: error.name,
      message: error.message,
      stack: error.stack,
    };
  }

  // Always log to console in development
  if (process.env.NODE_ENV !== 'production') {
    const consoleMethod = level === 'error' ? console.error : level === 'warn' ? console.warn : console.log;
    consoleMethod(`[${level.toUpperCase()}] ${component ? `[${component}] ` : ''}${message}`, data || '');
  }

  // Queue for server
  logQueue.push(entry);
  scheduleFlush();
}

/**
 * Client Logger class for scoped logging
 */
export class ClientLogger {
  private component: string;

  constructor(component: string) {
    this.component = component;
  }

  debug(message: string, data?: Record<string, unknown>): void {
    log('debug', message, this.component, undefined, data);
  }

  info(message: string, data?: Record<string, unknown>): void {
    log('info', message, this.component, undefined, data);
  }

  warn(message: string, data?: Record<string, unknown>): void {
    log('warn', message, this.component, undefined, data);
  }

  error(message: string, error?: Error | unknown, data?: Record<string, unknown>): void {
    const err = error instanceof Error ? error : undefined;
    log('error', message, this.component, undefined, data, err);
  }

  /**
   * Log user interaction events
   */
  event(action: string, data?: Record<string, unknown>): void {
    log('info', `User action: ${action}`, this.component, action, data);
  }

  /**
   * Log page/component mount
   */
  mount(data?: Record<string, unknown>): void {
    log('debug', 'Component mounted', this.component, 'mount', data);
  }

  /**
   * Log navigation events
   */
  navigation(from: string, to: string): void {
    log('info', 'Navigation', this.component, 'navigation', { from, to });
  }

  /**
   * Log performance timing
   */
  timing(operation: string, durationMs: number): void {
    log('debug', `Timing: ${operation}`, this.component, 'timing', { operation, durationMs });
  }
}

// Default export for quick usage
export const clientLogger = {
  debug: (message: string, data?: Record<string, unknown>) => log('debug', message, undefined, undefined, data),
  info: (message: string, data?: Record<string, unknown>) => log('info', message, undefined, undefined, data),
  warn: (message: string, data?: Record<string, unknown>) => log('warn', message, undefined, undefined, data),
  error: (message: string, error?: Error | unknown, data?: Record<string, unknown>) => {
    const err = error instanceof Error ? error : undefined;
    log('error', message, undefined, undefined, data, err);
  },
};

// Flush logs before page unload
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    if (logQueue.length > 0) {
      // Use sendBeacon for reliable delivery on page unload
      const data = JSON.stringify({ logs: logQueue });
      navigator.sendBeacon('/api/logs', data);
    }
  });

  // Capture unhandled errors
  window.addEventListener('error', (event) => {
    log('error', 'Unhandled error', 'window', 'error', {
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
    });
  });

  // Capture unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    log('error', 'Unhandled promise rejection', 'window', 'unhandledrejection', {
      reason: String(event.reason),
    });
  });
}
