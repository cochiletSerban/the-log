import { Entry } from './../objects/entry';
import { EntryService } from './../services/entry.service';
import { Component, OnInit } from '@angular/core';
import { Renderer2, ElementRef, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
declare var $: any;
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  name: string;
  currentTab = 'feed';
  privateEntries: Array<Entry>;
  publicEntries: Array<Entry>;

  constructor(private entryService: EntryService) {
    entryService.privateEntryAdded$.subscribe(entry => {
      this.privateEntries.push(entry);
    });
  }

  ngOnInit() {
    $('.tabs').tabs();
    this.name = localStorage.getItem('username');
    this.entryService.getPublicEntries().subscribe(entries => this.publicEntries = entries);
    this.entryService.getPrivateEntries().subscribe(entries => this.privateEntries = entries);
  }
}

