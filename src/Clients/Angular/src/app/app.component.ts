import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SecurityService, ApplicationUserModel, ApplicationClaimType } from "@core/security";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public title = "MT";
  public isCollapsed = true;
  public applicationUser: ApplicationUserModel;

  public ApplicationClaimType = ApplicationClaimType;

  constructor(private router: Router, private securityService: SecurityService) {
    this.applicationUser = securityService.applicationUser;
  }

  public ngOnInit(): void {}

  public logout(event: MouseEvent) {
    this.securityService.logout();
    this.router.navigate(["/"]);

    event.preventDefault();
  }
}
