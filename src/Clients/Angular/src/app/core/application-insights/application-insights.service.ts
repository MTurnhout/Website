import { Injectable } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { environment } from "@environments/environment";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { filter, map, mergeMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApplicationInsightsService {
  private appInsights = new ApplicationInsights({
    config: {
      instrumentationKey: environment.applicationInsights.instrumentationKey
    }
  });

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.appInsights.loadAppInsights();

    this.trackPageViews();
  }

  private trackPageViews(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === "primary"),
        mergeMap(route => route.data)
      )
      .subscribe(event => {
        this.appInsights.trackPageView(event.title);
      });
  }
}
