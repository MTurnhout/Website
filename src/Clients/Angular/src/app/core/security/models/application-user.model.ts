import { ApplicationClaimType } from "../enums/application-claim-type.enum";

export class ApplicationUserModel {
  public isAuthenticated = false;
  public bearerToken: string = null;

  public userName: string = null;
  public firstName: string = null;
  public lastName: string = null;
  public email: string = null;

  public claims: ApplicationClaimType[] = [];
}
