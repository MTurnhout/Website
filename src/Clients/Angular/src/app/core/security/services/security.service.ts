import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { ApiService } from "@core/abstraction";
import { LocalStorageService } from "@core/local-storage";
import { ApplicationUserModel } from "../models/application-user.model";
import { UserCredentialsModel } from "../models/user-credentials.model";

@Injectable({
  providedIn: "root"
})
export class SecurityService extends ApiService {
  public applicationUser = new ApplicationUserModel();

  constructor(http: HttpClient, private localStorage: LocalStorageService) {
    super(http, "users");
  }

  login(userCredentials: UserCredentialsModel): Observable<ApplicationUserModel> {
    return this.post<ApplicationUserModel>(userCredentials, "/authenticate").pipe(
      map(user => {
        Object.assign(this.applicationUser, user);
        this.localStorage.setUserItem("bearerToken", user.bearerToken);

        return user;
      })
    );
  }

  logout() {
    Object.assign(this.applicationUser, new ApplicationUserModel());
    this.localStorage.clearUserItems();
  }
}
