import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { SecurityService } from "../services/security.service";

/**
 * Logout if 401 response returned from API
 */
@Injectable()
export class UnauthorizedErrorInterceptor implements HttpInterceptor {
  constructor(private securityService: SecurityService) {}

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        if (err.status === 401) {
          this.securityService.logout();
          location.reload();
        }

        let error: string;
        if (err.error && err.error.message) {
          error = err.error.message;
        } else {
          error = err.statusText;
        }

        return throwError(error);
      })
    );
  }
}
