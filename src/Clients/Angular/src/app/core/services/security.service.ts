import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { LocalStorageService } from "./local-storage.service";
import { ApiService } from "./api-service";
import { ApplicationUserModel, UserCredentialsModel } from "../models";

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
