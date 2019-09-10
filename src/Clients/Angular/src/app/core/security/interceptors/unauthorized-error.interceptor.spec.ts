import { UnauthorizedErrorInterceptor } from "./unauthorized-error.interceptor";

describe("UnauthorizedErrorInterceptor", () => {
  it("should create an instance", () => {
    expect(new UnauthorizedErrorInterceptor(null)).toBeTruthy();
  });
});
