import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginRoutingModule } from "./login-routing.module";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./login.component";
import { RecaptchaModule, RecaptchaFormsModule } from "ng-recaptcha";
import { AuthenticationService } from "./shared/services/authentication.service";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, SharedModule, RecaptchaModule, RecaptchaFormsModule],
  providers: [AuthenticationService]
})
export class LoginModule {}
