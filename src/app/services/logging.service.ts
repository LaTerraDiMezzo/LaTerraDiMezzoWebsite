import { formatDate } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  constructor(
    @Inject('LoggingSource') private source: string
  ) {
    // Empty for now
  }

  private getSource(): string {
    return this.source ? this.source : 'Unknown source';
  }

  private getContext(context?: string): string {
    return context ? context : 'Unknown context';
  }

  private formatMessage(message: string, level: string, context?: string) {
    return `${formatDate(new Date(), 'full', 'en-US')} - ${this.getSource()} (${this.getContext(context)}) [${level}]: ${message}`
  }

  debug(message: string, context?: string): boolean {
    try {
      console.debug(this.formatMessage(message, 'DEBUG', context));
      return true;
    } catch (e) {
      return false;
    }
  }

  info(message: string, context?: string): boolean {
    try {
      console.info(this.formatMessage(message, 'INFO', context));
      return true;
    } catch (e) {
      return false;
    }
  }

  warn(message: string, context?: string): boolean {
    try {
      console.warn(this.formatMessage(message, 'WARNING', context));
      return true;
    } catch (e) {
      return false;
    }
  }

  error(message: string, context?: string): boolean {
    try {
      console.error(this.formatMessage(message, 'ERROR', context));
      return true;
    } catch (e) {
      return false;
    }
  }
}
