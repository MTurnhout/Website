import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {
  ApplicationClaimType,
  ApplicationUserModel,
  SecurityService,
} from "@core/security";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public title = "MT";
  public isCollapsed = true;
  public applicationUser: ApplicationUserModel;

  public ApplicationClaimType = ApplicationClaimType;

  constructor(
    private router: Router,
    private securityService: SecurityService
  ) {
    this.applicationUser = securityService.applicationUser;
  }

  public logout(event: MouseEvent) {
    this.securityService.logout();
    this.router.navigate(["/"]);

    event.preventDefault();
  }

  public toggleNavigationBar() {
    this.isCollapsed = !this.isCollapsed;
  }

  public collapseNavigationBar() {
    this.isCollapsed = true;
  }
}
