// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  clientUrl: "http://localhost:4200",
  apiUrl: "/api",
  recaptchaSiteKey: "6LdLprcUAAAAABxlfA223kbR2lhoAqTKKXyDjMdS",
  azureAdSettings: {
    enabled: true,
    // Directory id
    tenantId: "bfc60a20-4601-4b3b-aa55-2ba676b14976",
    // App registration id of client
    clientId: "ba0156a1-daaa-4b6d-990a-a73283a95a4a",
    // App registration id of web api
    webApiId: "0be261fe-0e96-4163-b07d-fbac0059c339"
  },
  applicationInsights: {
    instrumentationKey: "850af97e-3c89-4da4-aee3-79bfa6cb9a8c"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
