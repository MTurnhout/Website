import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { ApplicationClaimType } from "../enums/application-claim-type.enum";
import { SecurityService } from "../services/security.service";

@Directive({
  selector: "[appHasClaim]"
})
export class HasClaimDirective {
  private claimTypes: ApplicationClaimType[];

  @Input()
  public set appHasClaim(
    claimType: ApplicationClaimType | ApplicationClaimType[]
  ) {
    this.claimTypes = Array.isArray(claimType) ? claimType : [claimType];
    this.validateClaim();
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private securityService: SecurityService
  ) {
    securityService.applicationUserChanged.subscribe(() =>
      this.validateClaim()
    );
  }

  private validateClaim() {
    if (this.securityService.hasClaim(this.claimTypes)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
