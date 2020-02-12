import { Component, OnInit } from "@angular/core";
import { SiteCardbService } from "src/app/core/services/site-cardb/site-cardb.service";
import { MatDialogRef, MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { MustMatch } from "src/app/core/authentication/registration/registration.validators";
import { AuthService } from "src/app/core/services/authentication/auth.service";
import { IUser } from 'src/app/shared/models/authentication/user';

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"]
})
export class ChangePasswordComponent implements OnInit {
  registerForm: FormGroup;

  hide = true;
  currentUser: IUser;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    private router: Router,
    private dbService: SiteCardbService,
    private auth: AuthService,
    private _snackBar: MatSnackBar
  ) {
    this.registerForm = this.formBuilder.group(
      {
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
        validators: [MustMatch("password", "confirmPassword")]
      }
    );
  }

  ngOnInit() {
    this.auth.currentUser.subscribe((res: IUser) => {
      this.currentUser = res
    })
  }

  changePassword() {
    this.dbService
      .changePassword(this.currentUser.id, this.registerForm.value.password)
      .subscribe(res => {
        this.openSnackBar("Вашата парола беше сменена успешно!", "Затвори");
        // this.auth.saveUser()
        this.dialogRef.close(true);
        // this.router.navigate([''])
      });
  }

  openSnackBar(message: string, action: string) {
    let snackBarRef = this._snackBar.open(message, action, {
      duration: 6000,
      panelClass: ["registration-snackbar"],
      verticalPosition: "top"
    });
    // snackBarRef.onAction().subscribe(() => this.openLoginModal());
  }
}
