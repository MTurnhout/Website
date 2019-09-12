import { Directive, ViewContainerRef, TemplateRef, Input } from "@angular/core";
import { SecurityService } from "../services/security.service";
import { ApplicationClaimType } from "../enums/application-claim-type.enum";

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
