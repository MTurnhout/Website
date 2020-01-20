import { HasClaimDirective } from "./has-claim.directive";
import { SecurityService } from "../services/security.service";

describe("HasClaimDirective", () => {
  it("should create an instance", () => {
    const directive = new HasClaimDirective(
      null,
      null,
      new SecurityService(null, null)
    );
    expect(directive).toBeTruthy();
  });
});
