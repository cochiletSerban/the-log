import { Entry } from './../objects/entry';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  // selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Input() entry: Entry;
  isSelected = '';
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  selected() {
    console.log(this.entry);
    if (this.isSelected === 'selected') {
      this.isSelected  = '';
    } else {
      this.isSelected = 'selected';
    }
    //event emitor and push to array of items to delete // add cascade delete inbakc
  }

  get isUser() {
    if (this.router.url === '/user-profile') {
      return true;
    }
    return false;
  }

}
