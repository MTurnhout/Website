import { BrowserModule } from "@angular/platform-browser";
import { NgModule, APP_INITIALIZER } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { JwtInterceptor, UnauthorizedErrorInterceptor, SecurityService } from "@core/security";
import { ToastsContainerComponent } from "@core/toast";
import { HasClaimDirective } from "./core/security/directives/has-claim.directive";

@NgModule({
  declarations: [AppComponent, ToastsContainerComponent, HasClaimDirective],
  imports: [NgbModule, BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    { provide: APP_INITIALIZER, useFactory: loadCurrentUser, deps: [SecurityService], multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function loadCurrentUser(securityService: SecurityService) {
  return () => securityService.restoreSession();
}
