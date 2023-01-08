import { Injectable } from '@angular/core';
import { LogEntry } from './types';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  log(entry: LogEntry) {
    this.consoleByType(entry);
  }

  private consoleByType(entry: LogEntry) {
    switch (entry.type) {
      case 'debug':
        console.debug(entry);
        break;
      case 'info':
        console.info(entry);
        break;
      case 'warn':
        console.warn(entry);
        break;
      case 'error':
        console.error(entry);
        break;
      default:
        console.log(entry);
        break;
    }
  }
}


