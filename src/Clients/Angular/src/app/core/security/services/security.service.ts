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

  public login(
    userCredentials: UserCredentialsModel
  ): Observable<ApplicationUserModel> {
    return this.post<ApplicationUserModel>(
      userCredentials,
      "/authenticate"
    ).pipe(
      map(user => {
        this.localStorage.setUserItem("bearerToken", user.bearerToken);
        this.updateUser(user);

        return user;
      })
    );
  }

  public logout() {
    this.localStorage.clearUserItems();
    this.updateUser(new ApplicationUserModel());
  }

  public hasClaim(claim: ApplicationClaimType | ApplicationClaimType[]) {
    if (Array.isArray(claim)) {
      return this.applicationUser.claims.some(c => claim.includes(c));
    } else {
      return this.applicationUser.claims.includes(claim);
    }
  }

  public restoreSession() {
    const bearerToken = this.getBearerToken();

    if (bearerToken) {
      this.get<ApplicationUserModel>("/restore").subscribe(applicationUser => {
        if (applicationUser) {
          this.updateUser(applicationUser);
        } else {
          this.logout();
        }
      });
    }
  }

  public getBearerToken(): string {
    return this.applicationUser.bearerToken
      ? this.applicationUser.bearerToken
      : this.localStorage.getItem("bearerToken");
  }

  private updateUser(applicationUser: ApplicationUserModel) {
    Object.assign(this.applicationUser, applicationUser);
    this.applicationUserChanged.emit(this.applicationUser);
  }
}
