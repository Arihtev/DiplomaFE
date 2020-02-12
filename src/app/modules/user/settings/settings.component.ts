import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/services/authentication/auth.service";
import {
  ValidateEmail,
  MustMatch
} from "src/app/core/authentication/registration/registration.validators";
import { IUser } from "src/app/shared/models/authentication/user";
import { ImageUploaderOptions } from "ngx-image-uploader";
import { SiteCardbService } from 'src/app/core/services/site-cardb/site-cardb.service';
import { MatDialog } from '@angular/material';
import { ChangePasswordComponent } from './change-password/change-password.component';

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  registerForm: FormGroup;
  user: IUser;
  changePic = false;

  imageOptions: ImageUploaderOptions = {
    uploadUrl: "",
    cropEnabled: false,
    thumbnailResizeMode: "fill",
    autoUpload: false,
    resizeOnLoad: false,
    thumbnailWidth: 300,
    thumbnailHeight: 300
  };

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private dbService: SiteCardbService, public dialog: MatDialog,) {
    this.registerForm = this.formBuilder.group(
      {
        phone: [""],
      //   password: [
      //     "",
      //     [
      //       Validators.required,
      //       Validators.pattern(
      //         "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{7,}"
      //       ),
      //       Validators.minLength(8)
      //     ]
      //   ],
      //   confirmPassword: [""]
      // },
      // {
      //   validators: [MustMatch("password", "confirmPassword")]
      }
    );
  }

  ngOnInit() {
    this.auth.currentUser.subscribe(res => {
      this.user = res;
    });
    this.registerForm.controls["phone"].setValue(this.user.phone);
  }

  changeProfilePic() {
    this.changePic = true;
  }

  print(event) {
    console.log(event._imageThumbnail);
  }

  updateProfile(event) {
    // console.log("updating")
    this.dbService.updateProfile(this.user.id, event._imageThumbnail).subscribe(res => {
      // console.log(res);
      this.auth.saveUser()
    })
  }

  changePassword() {
    this.openDialog(ChangePasswordComponent,{
      width: "450px",
      // data: {
      //   reservation: this.reservation,
      // },
      autoFocus: false,
    });
  }

  openDialog(component, options): void {
    const dialogRef = this.dialog.open(component,options);
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result){
        // this.refreshReservations.emit()
      }
    });
  }
}
