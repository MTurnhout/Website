import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class JsonDateHttpInterceptor implements HttpInterceptor {
  private iso8601: RegExp = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/;

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.convertToDate(event.body);
        }
      })
    );
  }

  public convertToDate(body: any) {
    // Ability to configure HttpClient JSON.parse reviver would be nice
    if (body === null || body === undefined || typeof body !== "object") {
      return body;
    }

    for (const key of Object.keys(body)) {
      const value = body[key];
      if (!value) {
        continue;
      } else if (typeof value === "object") {
        this.convertToDate(value);
      } else if (typeof value === "string" && this.iso8601.test(value)) {
        body[key] = new Date(value);
      }
    }
  }
}
