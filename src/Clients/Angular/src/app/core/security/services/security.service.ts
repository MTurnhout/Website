import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { ApiService } from "@core/abstraction";
import { LocalStorageService } from "@core/local-storage";
import { LocalStorageKeys } from "@core/local-storage-keys";
import { environment } from "@environments/environment.prod";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { ApplicationClaimType } from "../enums/application-claim-type.enum";
import { AuthenticationType } from "../enums/authentication-type.enum";
import { ExternalAuthentication } from "../interfaces/external-authentication";
import { ApplicationUserModel } from "../models/application-user.model";
import { UserCredentialsModel } from "../models/user-credentials.model";
import { AzureAdAuthenticationService } from "./azure-ad-authentication.service";

@Injectable({
  providedIn: "root"
})
export class SecurityService extends ApiService {
  public applicationUser = new ApplicationUserModel();
  public applicationUserChanged = new EventEmitter<ApplicationUserModel>();

  constructor(
    http: HttpClient,
    private localStorage: LocalStorageService,
    private azureAdAuthenticationService: AzureAdAuthenticationService
  ) {
    super(http, "users");
  }

  public login(
    userCredentials: UserCredentialsModel
  ): Observable<ApplicationUserModel> {
    this.setAuthenticationType(AuthenticationType.Default);
    return this.post<ApplicationUserModel>(
      userCredentials,
      "/authenticate"
    ).pipe(
      map(user => {
        this.localStorage.setUserItem(
          LocalStorageKeys.AccessToken,
          user.bearerToken
        );
        this.updateUser(user);

        return user;
      })
    );
  }

  public externalLogin(authenticationType: AuthenticationType): Promise<any> {
    this.setAuthenticationType(authenticationType);
    const authenticationService = this.getExternalAuthentication();
    if (authenticationService) {
      return authenticationService.login().then(() => {
        this.loadCurrentUser();
      });
    }
  }

  public logout() {
    const authenticationService = this.getExternalAuthentication();
    if (authenticationService) {
      authenticationService.logout();
    }

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

  public async restoreSession(): Promise<ApplicationUserModel> {
    let accessToken = null;

    const authenticationService = this.getExternalAuthentication();
    if (authenticationService) {
      await authenticationService.awaitInitialization();
      accessToken = authenticationService.getAccessToken();
    } else {
      accessToken = this.getAccessToken();
    }

    if (!accessToken) {
      return of(null).toPromise();
    }

    this.loadCurrentUser();
  }

  public getAccessToken(): string {
    const authenticationService = this.getExternalAuthentication();
    if (authenticationService) {
      return authenticationService.getAccessToken();
    }

    return this.applicationUser.bearerToken
      ? this.applicationUser.bearerToken
      : this.localStorage.getItem(LocalStorageKeys.AccessToken);
  }

  private updateUser(applicationUser: ApplicationUserModel) {
    Object.assign(this.applicationUser, applicationUser);
    this.applicationUserChanged.emit(this.applicationUser);
  }

  private loadCurrentUser(): Promise<ApplicationUserModel> {
    return this.get<ApplicationUserModel>("/current")
      .pipe(
        map(applicationUser => {
          if (applicationUser) {
            this.updateUser(applicationUser);
          } else {
            this.logout();
          }

          return this.applicationUser;
        })
      )
      .toPromise();
  }

  private getExternalAuthentication(): ExternalAuthentication {
    const authenticationType = this.getAuthenticationType();
    switch (authenticationType) {
      case AuthenticationType.AzureAd: {
        return environment.azureAdSettings.enabled
          ? this.azureAdAuthenticationService
          : null;
      }
      default: {
        return null;
      }
    }
  }

  private getAuthenticationType(): AuthenticationType {
    let authenticationType = this.localStorage.getItem<AuthenticationType>(
      LocalStorageKeys.AuthenticationType
    );
    if (!authenticationType) {
      authenticationType = AuthenticationType.Default;
    }

    return authenticationType;
  }

  private setAuthenticationType(authenticationType: AuthenticationType) {
    this.localStorage.setUserItem(
      LocalStorageKeys.AuthenticationType,
      authenticationType
    );
  }
}
