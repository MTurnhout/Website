import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { RecaptchaFormsModule, RecaptchaModule } from "ng-recaptcha";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
})
export class LoginModule {}
