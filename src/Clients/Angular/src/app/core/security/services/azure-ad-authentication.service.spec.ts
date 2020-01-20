import { TestBed } from "@angular/core/testing";

import { AzureAdAuthenticationService } from "./azure-ad-authentication.service";

describe("AzureAdAuthenticationService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: AzureAdAuthenticationService = TestBed.get(
      AzureAdAuthenticationService
    );
    expect(service).toBeTruthy();
  });
});
