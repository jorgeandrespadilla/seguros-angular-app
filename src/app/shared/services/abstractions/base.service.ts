import { HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { LoggerService } from "@shared/services/logger.service";

export abstract class BaseService {
  constructor(
    protected logger: LoggerService
  ) { }

  protected handleError<T>(operation = 'operation') {
    return (error: HttpErrorResponse) => {
      this.logger.log({
        type: 'error',
        message: `${operation} failed: ${error.message || 'Something went wrong'}`,
        data: error
      });
      return throwError(() => error);
    }
  };
}
