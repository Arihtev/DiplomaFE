import { AuthService } from './../../services/authentication/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MustMatch, ValidateUsername, ValidateEmail } from './registration.validators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginComponent } from 'src/app/authentication/login/login.component';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup
  
  closeBtnName: string;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, public bsModalRef: BsModalRef, private modalService: BsModalService) {
    this.registerForm = this.formBuilder.group({
      username: [''],
      email: ['', [Validators.email]],
      firstName: [''],
      lastName: [''],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'), Validators.minLength(8)]],
      confirmPassword: [''],
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

  goToLogin(){
    // this.bsModalRef.hide()
    // this.bsModalRef = this.modalService.show(LoginComponent, {class: 'modal-dialog-centered'})
  }

}
