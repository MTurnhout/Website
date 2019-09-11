import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";
import { SecurityService } from "../services/security.service";

/**
 * Add authorization header with jwt token if available
 */
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private securityService: SecurityService) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const applicationUser = this.securityService.applicationUser;
    if (applicationUser && applicationUser.bearerToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${applicationUser.bearerToken}`
        }
      });
    }

    return next.handle(request);
  }
}
