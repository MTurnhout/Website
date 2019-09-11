import { Directive, ViewContainerRef, TemplateRef, Input } from "@angular/core";
import { SecurityService } from "../services/security.service";
import { ApplicationClaimType } from "../enums/application-claim-type.enum";

@Directive({
  selector: "[appHasClaim]"
})
export class HasClaimDirective {
  private claimType: ApplicationClaimType;

  @Input()
  public set appHasClaim(claimType: ApplicationClaimType) {
    this.claimType = claimType;
    this.validateClaim();
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, private securityService: SecurityService) {
    securityService.applicationUserChanged.subscribe(() => this.validateClaim());
  }

  private validateClaim() {
    if (this.securityService.hasClaim(this.claimType)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
