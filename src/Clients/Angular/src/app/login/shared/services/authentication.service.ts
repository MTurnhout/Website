import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/shared/services/api-service";
import { UserCredentials } from "../models/user-credentials";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { LocalStorageService } from "src/app/core/local-storage.service";
import { AuthenticatedUserModel } from "src/app/shared/models/authenticated-user-model";

@Injectable()
export class AuthenticationService extends ApiService {
  constructor(http: HttpClient, private localStorage: LocalStorageService) {
    super(http, "users");
  }

  login(userCredentials: UserCredentials): Observable<AuthenticatedUserModel> {
    return this.post<AuthenticatedUserModel>(userCredentials, "/authenticate").pipe(
      map(user => {
        if (user && user.token) {
          this.localStorage.setUserItem("currentUser", user);
        }

        return user;
      })
    );
  }

  logout() {
    this.localStorage.clearUserItems();
  }
}
