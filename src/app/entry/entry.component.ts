import { Entry } from './../objects/entry';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Input() entry: Entry;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  get isUser() {
    if (this.router.url === '/user-profile') {
      return true;
    }
    return false;
  }

}
