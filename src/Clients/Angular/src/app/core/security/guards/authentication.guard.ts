import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { SecurityService } from "../services/security.service";
import { ToastService } from "@core/toast";

@Injectable({
  providedIn: "root"
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private router: Router,
    private securityService: SecurityService,
    private toastService: ToastService
  ) {}

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const claimType = next.data.claimType;

    const applicationUser = this.securityService.applicationUser;
    if (
      applicationUser.isAuthenticated &&
      (!claimType || this.securityService.hasClaim(claimType))
    ) {
      return true;
    }

    if (applicationUser.isAuthenticated) {
      this.toastService.showWarning("Not authorized to view this page!");
    } else {
      this.router.navigate(["/login"], {
        queryParams: { returnUrl: state.url }
      });
    }

    return false;
  }
}
