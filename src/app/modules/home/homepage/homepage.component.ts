import { Component, OnInit } from "@angular/core";
import { EasingLogic } from "ngx-page-scroll-core";
import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from 'src/app/core/services/language/language.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})
export class HomepageComponent implements OnInit {

  language: BehaviorSubject<string> = new BehaviorSubject('bg');
  constructor(private languageService: LanguageService) {
    // translate.addLangs(['bg', 'en']);
    // translate.setDefaultLang('bg')
    // translate.use('bg');
  }

  ngOnInit() {
    // this.language = this.languageService.loaderSubject
  }
}
