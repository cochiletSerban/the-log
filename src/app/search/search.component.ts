import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { InternatinonalizationService } from '../services/internatinonalization.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchText: string;
  @Output() search = new EventEmitter<string>();

  constructor(public inter: InternatinonalizationService) { }

  ngOnInit() {
  }

  onSearchInput(searchText) {
    console.log(searchText);
    this.search.emit(searchText);
  }

}
