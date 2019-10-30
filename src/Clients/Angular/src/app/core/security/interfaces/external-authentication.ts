export interface ExternalAuthentication {
  awaitInitialization(): Promise<any>;
  login(): Promise<any>;
  logout(): Promise<any>;
  getAccessToken(): string;
}
