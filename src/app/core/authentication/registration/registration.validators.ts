import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/authentication/auth.service';

export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

export function ValidateUsername(controlName: string, auth: AuthService) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        auth.validateUsername(control.value).subscribe(res => {
            if (res) {
                control.setErrors({ usernameTaken: true })
            }
        })
        return;
    }
}

export function ValidateEmail(controlName: string, auth: AuthService) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        auth.validateEmail(control.value).subscribe(res => {
            if (res) {
                control.setErrors({ emailTaken: true })
            }
        })
        return;
    }
}