import { SecurityService } from "../services/security.service";
import { HasClaimDirective } from "./has-claim.directive";

describe("HasClaimDirective", () => {
  it("should create an instance", () => {
    const directive = new HasClaimDirective(
      null,
      null,
      new SecurityService(null, null, null)
    );
    expect(directive).toBeTruthy();
  });
});
