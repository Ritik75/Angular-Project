import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public username: string;
  public emailId: string;
  public errorMessage: string;
  @Output()

  public email: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fb: FormBuilder, private router: Router, private serv: LoginService) { }

  public ngOnInit() {
    this.form = this.fb.group({
      emailId: ["", [Validators.required, Validators.email, Validators.pattern("[a-z]+@infy.com")]],
      password: ["", [Validators.required, Validate]],
    });
  }

  public login() {
    this.errorMessage = "";
    this.serv.login(this.form.value).subscribe((success) => {
      localStorage.setItem("emailId", success.emailId);
      this.email.emit(this.emailId);
      this.router.navigate(["/dashboard"]);

    }, (err) => { this.errorMessage = err.error.message; });
  }
}

function Validate(input: FormControl) {
  const inputVal = input.value;
  return inputVal.match(/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{7,20}$/) ? null : {
    passwordError: { message: "*please enter valid password" },
  };
}
