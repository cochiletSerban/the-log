import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchText: string;
  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSearchInput(searchText) {
    console.log(searchText);
    this.search.emit(searchText);
  }

}
