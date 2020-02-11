import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";
import { ICar } from "src/app/shared/models/site-db/cars";
import { ActivatedRoute, Router } from "@angular/router";
import { SiteCardbService } from "src/app/core/services/site-cardb/site-cardb.service";
import { EditMainComponent } from "./edit-main/edit-main.component";
import { EditExtrasComponent } from "./edit-extras/edit-extras.component";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-edit-car",
  templateUrl: "./edit-car.component.html",
  styleUrls: ["./edit-car.component.scss"]
})
export class EditCarComponent implements OnInit {
  @ViewChild(EditMainComponent, { static: true })
  editMainComponent: EditMainComponent;
  @ViewChild(EditExtrasComponent, { static: true })
  editExtrasComponent: EditExtrasComponent;

  get formStepOne() {
    return this.editMainComponent ? this.editMainComponent.locationForm : null;
  }

  get formStepTwo() {
    return this.editMainComponent ? this.editMainComponent.rulesForm : null;
  }

  get formStepThree() {
    return this.editExtrasComponent
      ? this.editExtrasComponent.amenitiesForm
      : null;
  }

  car: ICar;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carDbService: SiteCardbService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.carDbService.car_details(params.id).subscribe((res: ICar) => {
        this.car = res;
      });
    });
  }

  submitForm() {
    console.log("WASSUP")
    // let city = this.formStepOne.value.city.name;
    // let region = this.formStepOne.value.region.name;
    // let address = this.formStepOne.value.address;
    // let zipCode = this.formStepOne.value.zipCode;
    console.log(this.formStepTwo.value)

    // let safety = this.formStepTwo.value.safetyExtras;
    // let comfort = this.formStepTwo.value.comfortExtras;
    // let others = this.formStepTwo.value.otherExtras;
    // let extras = safety.concat(comfort, others);

    // let pets = this.formStepThree.value.pets;
    // let smoking = this.formStepThree.value.smoking;
    // let includedKm = this.formStepThree.value.includedKm;
    // let pricePerExtraKm = this.formStepThree.value.pricePerExtraKm;
    // let price = this.formStepThree.value.price;
    // let weeklyDiscount = this.formStepThree.value.weeklyDiscount;
    // let monthlyDiscount = this.formStepThree.value.monthlyDiscount;

    // console.log(this.car.id, region, city, address, zipCode, extras, pets, smoking,
    //     includedKm, pricePerExtraKm, price, weeklyDiscount, monthlyDiscount)
    // this.carDbService.updateCar(this.car.id, region, city, address, zipCode, extras, pets, smoking,
    //   includedKm, pricePerExtraKm, price, weeklyDiscount, monthlyDiscount)
    //   .subscribe(res => {
    //     this.openSnackBar("Вашият автомобил беше запазен успешно!", "Затвори");
    //     this.router.navigate(["/host/manage-cars"]);
    //   });
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
