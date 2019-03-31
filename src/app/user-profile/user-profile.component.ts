import { Entry } from './../objects/entry';
import { EntryService } from './../services/entry.service';
import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit, AfterViewInit {
  name: string;
  currentTab = 'feed';
  searchText: string;
  privateEntries: Array<Entry>;
  publicEntries: Array<Entry>;

  constructor(private entryService: EntryService, private elRef: ElementRef, private auth: AuthService) {
    entryService.privateEntryAdded$.subscribe(entry => {
      this.privateEntries.push(entry);
    });
  }

  ngOnInit() {
    this.name = this.auth.getUserDetailes().username;
    this.entryService.getPublicEntries().subscribe(entries => this.publicEntries = entries);
    this.entryService.getPrivateEntries().subscribe(entries => this.privateEntries = entries);
  }

  ngAfterViewInit() {
    M.Tabs.init(this.elRef.nativeElement.querySelector('.tabs'), {});
  }
}

