import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SecurityService } from "@core/services";
import { ApplicationUserModel } from "@core/models";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "MT";
  isCollapsed = true;
  applicationUser: ApplicationUserModel;

  constructor(private router: Router, private securityService: SecurityService) {
    this.applicationUser = securityService.applicationUser;
  }

  ngOnInit(): void {}

  logout(event: MouseEvent) {
    this.securityService.logout();
    this.router.navigate(["/"]);

    event.preventDefault();
  }
}
