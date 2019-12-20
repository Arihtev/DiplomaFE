import { AuthService } from '../../services/authentication/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegistrationComponent } from 'src/app/core/authentication/registration/registration.component';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() close: EventEmitter<any> = new EventEmitter();
  
  loginForm: FormGroup
  errors: Error;
  
  closeBtnName: string;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder, private modalService: BsModalService) { 
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  loginUser(){
    let registeredUserData = {username: this.loginForm.controls.username.value, password: this.loginForm.controls.password.value}
    this.authService.loginUser(registeredUserData).subscribe((res: {token: string})=> {
      localStorage.setItem('token', res.token)
      this.close.emit()
      this.router.navigate([''])
      this.authService.saveUser()
    },
    err => {
      this.errors = err.error
      this.loginForm.setErrors({'incorrect': true})
    })
  }

}