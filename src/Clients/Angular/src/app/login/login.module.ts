import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginRoutingModule } from "./login-routing.module";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./login.component";
import { RecaptchaModule } from "ng-recaptcha";
import { RecaptchaFormsModule } from "ng-recaptcha/forms";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, SharedModule, RecaptchaModule, RecaptchaFormsModule]
})
export class LoginModule {}
