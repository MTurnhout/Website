import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  formValidation: FormGroup;

  constructor() {}

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
      ])
    });
  }

  login() {
    if (!this.formValidation.valid) {
      this.formValidation.markAllAsTouched();
      return;
    }
  }
}
