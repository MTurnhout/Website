export class ApplicationUserModel {
  isAuthenticated = false;
  bearerToken: string = null;

  userName: string = null;
  firstName: string = null;
  lastName: string = null;
  email: string = null;
}
