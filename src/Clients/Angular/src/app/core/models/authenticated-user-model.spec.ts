import { AuthenticatedUserModel } from "./authenticated-user-model";

describe("AuthenticatedUserModel", () => {
  it("should create an instance", () => {
    expect(new AuthenticatedUserModel()).toBeTruthy();
  });
});
