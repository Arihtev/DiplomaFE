import { Component, OnInit } from "@angular/core";
import { EasingLogic } from "ngx-page-scroll-core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})
export class HomepageComponent implements OnInit {
  constructor(translate: TranslateService) {
    translate.setDefaultLang("bg");
    translate.use("bg");
  }

  ngOnInit() {}
}
