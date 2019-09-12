import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { SecurityService } from "../services/security.service";

/**
 * Add authorization header with jwt token if available
 */
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private securityService: SecurityService) {}

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const bearerToken = this.securityService.getBearerToken();
    if (bearerToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${bearerToken}`
        }
      });
    }

    return next.handle(request);
  }
}