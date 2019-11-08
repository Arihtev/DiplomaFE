import { AuthService } from './../../services/authentication/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MustMatch, ValidateUsername, ValidateEmail } from './registration.validators';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup
  
  closeBtnName: string;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, public bsModalRef: BsModalRef) {
    this.registerForm = this.formBuilder.group({
      username: ['user2'],
      email: ['user2@mail.com', [Validators.email]],
      firstName: ['user2'],
      lastName: ['user2'],
      password: ['Georgi123@', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'), Validators.minLength(8)]],
      confirmPassword: ['Georgi123@'],
    }, {
      validators: [MustMatch('password', 'confirmPassword'), ValidateUsername('username', auth), ValidateEmail('email', auth)],
    });
  }

  ngOnInit() {
  }

  printInfo() {
    this.validateUsername(this.registerForm.controls.username.value)
  }

  private validateUsername(userName) {
    this.auth.validateUsername(userName).subscribe(res => {
      console.log(res)
    })
  }

  registerUser() {
    let controls = this.registerForm.controls
    let user = {
      username: controls.username.value,
      email: controls.email.value,
      password: controls.password.value,
      firstName: controls.firstName.value,
      lastName: controls.lastName.value,
    }
    this.auth.registerUser(user).subscribe(res => {
      console.log(res)
    },
    err => {
      console.log(err)
    })
  }

}
