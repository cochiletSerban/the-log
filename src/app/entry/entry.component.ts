import { Entry } from './../objects/entry';
import { Component, OnInit, Input,  Output ,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Input() entry: Entry;
  @Output() entrySelected: EventEmitter<any> = new EventEmitter();

  isSelected = '';
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  selected() {
    if (this.isSelected === 'selected') {
      this.isSelected  = '';
      this.entrySelected.emit({
        entry: this.entry,
        add: false
      });
    } else {
      this.isSelected = 'selected';
      this.entrySelected.emit({
        entry: this.entry,
        add: true
      });
    }
  }

  get isUser() {
    if (this.router.url === '/user-profile') {
      return true;
    }
    return false;
  }

}
