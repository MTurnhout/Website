import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthenticationService } from "@core/services";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  formValidation: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.initValidation();
  }

  initValidation() {
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

  login() {
    if (!this.formValidation.valid) {
      this.formValidation.markAllAsTouched();
      return;
    }

    this.authenticationService
      .login({
        email: this.formValidation.get("email").value,
        password: this.formValidation.get("password").value
      })
      .subscribe(currentUser => {
        const returnUrl = this.route.snapshot.queryParams.returnUrl || "/";
        this.router.navigate([returnUrl]);
      });
  }
}
