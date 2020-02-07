import { Component, HostListener } from "@angular/core";
import { EasingLogic } from "ngx-page-scroll-core";
import {
  Router,
  NavigationStart,
  NavigationEnd,
  RouterEvent,
  NavigationCancel,
  NavigationError
} from "@angular/router";
import { CustomHttpService } from "./core/services/custom-http/custom-http.service";
import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from './core/services/language/language.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "rent-project";

  constructor(
    private router: Router,
    private languageService: LanguageService,
    // public translate: TranslateService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // this.routeLoading = true
      }
      if (event instanceof NavigationEnd) {
        // this.routeLoading = false
      }
    });
    this.languageService.init()
    // translate.addLangs(["bg", "en"]);
    // translate.setDefaultLang("bg");
    // translate.use("bg");
  }
  ngOnInit() {
    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
