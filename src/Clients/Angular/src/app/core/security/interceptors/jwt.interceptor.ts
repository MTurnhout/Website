import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
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
    const accessToken = this.securityService.getAccessToken();
    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    }

    return next.handle(request);
  }
}
