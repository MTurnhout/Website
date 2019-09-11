import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { ApiService } from "@core/abstraction";
import { LocalStorageService } from "@core/local-storage";
import { ApplicationUserModel } from "../models/application-user.model";
import { UserCredentialsModel } from "../models/user-credentials.model";
import { ApplicationClaimType } from "../enums/application-claim-type.enum";

@Injectable({
  providedIn: "root"
})
export class SecurityService extends ApiService {
  public applicationUser = new ApplicationUserModel();
  public applicationUserChanged = new EventEmitter<ApplicationUserModel>();

  constructor(http: HttpClient, private localStorage: LocalStorageService) {
    super(http, "users");
  }

  public login(userCredentials: UserCredentialsModel): Observable<ApplicationUserModel> {
    return this.post<ApplicationUserModel>(userCredentials, "/authenticate").pipe(
      map(user => {
        Object.assign(this.applicationUser, user);
        this.localStorage.setUserItem("bearerToken", user.bearerToken);

        this.applicationUserChanged.emit(this.applicationUser);

        return user;
      })
    );
  }

  public logout() {
    Object.assign(this.applicationUser, new ApplicationUserModel());
    this.localStorage.clearUserItems();

    this.applicationUserChanged.emit(this.applicationUser);
  }

  public hasClaim(claim: ApplicationClaimType) {
    return this.applicationUser && this.applicationUser.claims.includes(claim);
  }
}
