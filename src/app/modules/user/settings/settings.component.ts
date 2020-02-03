import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/authentication/auth.service';
import { ValidateEmail, MustMatch } from 'src/app/core/authentication/registration/registration.validators';
import { IUser } from 'src/app/shared/models/authentication/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  
  registerForm: FormGroup;
  user: IUser;

  constructor(    private formBuilder: FormBuilder, private auth: AuthService) {
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
          ValidateEmail("email", auth)
        ]
      }
    ); }

  ngOnInit() {
    this.auth.currentUser.subscribe(res => {
      this.user = res
      console.log(res)
    })
  }

}
