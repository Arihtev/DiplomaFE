import { Injectable } from "@angular/core";
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class LanguageService {
  public languages = ["en", "bg"];
  public defaultLang = "bg";
  public currentLang = this.defaultLang;
  public languageChanged = new BehaviorSubject(this.currentLang)

  constructor(public translate: TranslateService) {}

  public init() {
    this.translate.setDefaultLang(this.defaultLang);
  }

  public changeLang() {
    let language: string;
    if (this.currentLang === "bg") {
      language = "en";
    }
    if (this.currentLang === "en") {
      language = "bg";
    }
    this.translate.setDefaultLang(language);
    this.translate.use(language);
    this.currentLang = language;
    this.languageChanged.next(language)
  }

  public translateString(string) {
    return this.translate.instant(string);
  }
}
