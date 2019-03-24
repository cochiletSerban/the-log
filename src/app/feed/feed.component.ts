import { EntryService } from './../services/entry.service';
import { Entry } from './../objects/entry';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  constructor(private entryService: EntryService, private router: Router) {
    entryService.feedEntryAdded$.subscribe(entry => {
      this.allEntries.push(entry);
    });
   }

  allEntries: Array<Entry>;

  ngOnInit() {
    this.entryService.getAllEntries().subscribe(entries => this.allEntries = entries);
  }

  get isManager() {
    if (this.router.url === '/manager-profile') {
      return true;
    }
    return false;
  }

}
