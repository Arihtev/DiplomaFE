import { SearchFiltersComponent } from './search-filters/search-filters.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @ViewChild(SearchFiltersComponent, {static: true}) searchFiltersComponent: SearchFiltersComponent;

  get filters() {
    return this.searchFiltersComponent ? this.searchFiltersComponent.getForm() : null;
  }

  constructor(private router: Router) {
  }

  ngOnInit() {}

  search(){
    // console.log(this.filters)
    this.router.navigate(['/cars'], { 
      state: { example: this.filters } 
    })
  }
}