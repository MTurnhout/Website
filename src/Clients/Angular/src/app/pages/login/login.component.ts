import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { SecurityService } from "@core/security";
import { environment } from "@environments/environment";
import { ToastService } from "@core/toast";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public formValidation: FormGroup;
  public recaptchaSiteKey: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private securityService: SecurityService,
    private toastService: ToastService
  ) {}

  public ngOnInit() {
    this.initValidation();
    this.recaptchaSiteKey = environment.recaptchaSiteKey;
  }

  public initValidation() {
    this.formValidation = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(?=.*[\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+])(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+]{8,}$/
        )
      ]),
      recaptcha: new FormControl(null, Validators.required)
    });
  }

  public login() {
    if (!this.formValidation.valid) {
      this.formValidation.markAllAsTouched();
      return;
    }

    this.securityService
      .login({
        email: this.formValidation.get("email").value,
        password: this.formValidation.get("password").value,
        recaptcha: this.formValidation.get("recaptcha").value
      })
      .subscribe(
        () => {
          const returnUrl = this.route.snapshot.queryParams.returnUrl || "/";
          this.router.navigate([returnUrl]);
        },
        error => {
          this.toastService.showError(error);
        }
      );
  }
}
