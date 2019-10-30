import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { UserManager, UserManagerSettings, User, WebStorageStateStore } from "oidc-client";
import { ExternalAuthentication } from "../interfaces/external-authentication";

@Injectable({
  providedIn: "root"
})
export class AzureAdAuthenticationService implements ExternalAuthentication {
  private userManager: UserManager;
  private userPromise: Promise<User>;
  private user: User;

  constructor() {
    if (!environment.azureAdSettings.enabled) {
      return;
    }

    const azureAdSettings = environment.azureAdSettings;
    const config: UserManagerSettings = {
      authority: `https://sts.windows.net/${azureAdSettings.tenantId}`,
      client_id: azureAdSettings.clientId,
      redirect_uri: `${environment.clientUrl}/assets/oidc-login-redirect.html`,
      scope: `openid api://${azureAdSettings.webApiId}/api-access profile`,
      response_type: "id_token token",
      post_logout_redirect_uri: environment.clientUrl,
      extraQueryParams: { resource: azureAdSettings.webApiId },
      loadUserInfo: false,
      userStore: new WebStorageStateStore({ store: window.localStorage })
    };

    this.userManager = new UserManager(config);
    this.userPromise = this.loadUser();

    this.userManager.events.addUserLoaded(args => {
      this.loadUser();
    });
  }

  public awaitInitialization(): Promise<any> {
    return this.userPromise;
  }

  public login(): Promise<User> {
    return this.userManager.signinPopup();
  }

  public logout(): Promise<any> {
    return this.userManager.signoutRedirect();
  }

  public getAccessToken(): string {
    return this.user ? this.user.access_token : null;
  }

  private async loadUser(): Promise<User> {
    return this.userManager.getUser().then(user => {
      if (user && !user.expired) {
        this.user = user;
      }

      return user;
    });
  }
}
