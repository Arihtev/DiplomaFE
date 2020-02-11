import { AuthService } from "../../services/authentication/auth.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
  ValidationErrors
} from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import {
  MustMatch,
  ValidateUsername,
  ValidateEmail,
  ValidateBirthDate
} from "./registration.validators";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { LoginComponent } from "src/app/core/authentication/login/login.component";
import { MatSnackBar } from '@angular/material';
import { AuthenticationComponent } from '../authentication.component';
import * as moment from "moment";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  @Output() close: EventEmitter<any> = new EventEmitter();
  registerForm: FormGroup;

  closeBtnName: string;

  hide: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    public bsModalRef: BsModalRef,
    private modalService: BsModalService,
    private _snackBar: MatSnackBar,
    public translate: TranslateService
  ) {
    this.registerForm = this.formBuilder.group(
      {
        username: [""],
        email: ["", [Validators.email]],
        firstName: [""],
        lastName: [""],
        phone: [""],
        dateOfBirth: [""],
        password: [
          "",
          [
            Validators.required,
            Validators.pattern(
              "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{7,}"
            ),
            Validators.minLength(8)
          ]
        ],
        confirmPassword: [""]
      },
      {
        validators: [
          MustMatch("password", "confirmPassword"),
          ValidateUsername("username", auth),
          ValidateEmail("email", auth),
          ValidateBirthDate("dateOfBirth")
        ]
      }
    );
  }
  private openLoginModal() {
    const initialState = {
      title: "Вход",
      component: "login"
    };
    this.bsModalRef = this.modalService.show(AuthenticationComponent, {ignoreBackdropClick: true, class: "modal-dialog-centered", initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  ngOnInit() {}

  openSnackBar(message: string, action: string) {
    let snackBarRef = this._snackBar.open(message, action, {
      duration: 6000,
      panelClass: ["registration-snackbar"],
      verticalPosition: 'top'
    });
    snackBarRef.onAction().subscribe(() => this.openLoginModal());
  }

  printInfo() {
    this.validateUsername(this.registerForm.controls.username.value);
  }

  private validateUsername(userName) {
    this.auth.validateUsername(userName).subscribe(res => {
      console.log(res);
    });
  }

  registerUser() {
    let controls = this.registerForm.controls;
    let user = {
      username: controls.username.value,
      email: controls.email.value,
      password: controls.password.value,
      firstName: controls.firstName.value,
      lastName: controls.lastName.value,
      phone: controls.phone.value,
      dateOfBirth: moment(controls.dateOfBirth.value).format("YYYY-MM-D")
    };
    this.auth.registerUser(user).subscribe(
      res => {
        this.close.emit();
        this.translate.get("USER.REGISTERED").subscribe(res => {
          this.openSnackBar(res, "Login")
        })
      },
      err => {
        console.log(err);
      }
    );
  }

  goToLogin() {
    // this.bsModalRef.hide()
    // this.bsModalRef = this.modalService.show(LoginComponent, {class: 'modal-dialog-centered'})
  }
}
