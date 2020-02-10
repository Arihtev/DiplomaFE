import { Injectable } from "@angular/core";
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";

@Injectable({
  providedIn: "root"
})
export class LanguageService {
  public languages = ["en", "bg"];
  public defaultLang = "en";
  public currentLang = this.defaultLang;

  constructor(public translate: TranslateService) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event)
    });
  }

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
  }

  public translateString(string) {
    return this.translate.instant(string);
  }
}
