import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "@environments/environment";

export abstract class ApiService {
  protected actionUrl: string;

  constructor(private http: HttpClient, actionUrl: string) {
    this.actionUrl = `${environment.apiUrl}/${actionUrl}`;
    this.validateApiUrl(this.actionUrl);
  }

  protected get<T>(alternativeUrl: string = null): Observable<T> {
    if (alternativeUrl) {
      this.validateApiUrl(alternativeUrl);
    }

    let url = this.actionUrl;
    if (alternativeUrl) {
      url += alternativeUrl;
    }

    return this.http.get<T>(url).pipe(catchError(this.handleError));
  }

  protected post<T>(model: any, alternativeUrl: string = null): Observable<T> {
    if (alternativeUrl) {
      this.validateApiUrl(alternativeUrl);
    }

    let url = this.actionUrl;
    if (alternativeUrl) {
      url += alternativeUrl;
    }

    return this.http.post<T>(url, model).pipe(catchError(this.handleError));
  }

  protected put(model: any, alternativeUrl: string = null): Observable<never> {
    if (alternativeUrl) {
      this.validateApiUrl(alternativeUrl);
    }

    let url = this.actionUrl;
    if (alternativeUrl) {
      url += alternativeUrl;
    }

    return this.http.put<never>(url, model).pipe(catchError(this.handleError));
  }

  protected delete(alternativeUrl: string = null): Observable<never> {
    if (alternativeUrl) {
      this.validateApiUrl(alternativeUrl);
    }

    let url = this.actionUrl;
    if (alternativeUrl) {
      url += alternativeUrl;
    }

    return this.http.delete<never>(url).pipe(catchError(this.handleError));
  }

  private validateApiUrl(url: string): void {
    if (url.endsWith("/")) {
      throw new Error("API url may not end with '/'");
    }
  }

  private handleError(error: any): Observable<never> {
    const errorMessage = error.message
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : "Server error";

    console.error(errorMessage);
    return throwError(error);
  }
}
