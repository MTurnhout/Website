import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "@core/services";
import { AuthenticatedUserModel } from "@core/models";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "MT";
  isCollapsed = true;
  currentUser: AuthenticatedUserModel;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.currentUser = authenticationService.currentUser;
    authenticationService.currentUserObservable.subscribe(currentUser => (this.currentUser = currentUser));
  }

  ngOnInit(): void {}

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
