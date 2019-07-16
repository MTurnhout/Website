import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable, BehaviorSubject } from "rxjs";
import { LocalStorageService } from "./local-storage.service";
import { ApiService } from "./api-service";
import { AuthenticatedUserModel } from "../models/authenticated-user-model";
import { UserCredentials } from "@app/login/shared/models/user-credentials";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService extends ApiService {
  private localStorageCurrentUserKey = "currentUser";
  private currentUserSubject: BehaviorSubject<AuthenticatedUserModel>;
  public currentUserObservable: Observable<AuthenticatedUserModel>;

  public get currentUser(): AuthenticatedUserModel {
    return this.currentUserSubject.value;
  }

  constructor(http: HttpClient, private localStorage: LocalStorageService) {
    super(http, "users");

    const storedUser = this.localStorage.getItem<AuthenticatedUserModel>(this.localStorageCurrentUserKey);
    this.currentUserSubject = new BehaviorSubject<AuthenticatedUserModel>(storedUser);
    this.currentUserObservable = this.currentUserSubject.asObservable();
  }

  login(userCredentials: UserCredentials): Observable<AuthenticatedUserModel> {
    return this.post<AuthenticatedUserModel>(userCredentials, "/authenticate").pipe(
      map(user => {
        this.localStorage.setUserItem(this.localStorageCurrentUserKey, user);
        this.currentUserSubject.next(user);

        return user;
      })
    );
  }

  logout() {
    this.localStorage.clearUserItems();
    this.currentUserSubject.next(null);
  }
}
