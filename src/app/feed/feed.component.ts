import { EntryService } from './../services/entry.service';
import { Entry } from './../objects/entry';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  constructor(private entryService: EntryService) {
    entryService.feedEntryAdded$.subscribe(entry => {
      this.allEntries.push(entry);
    });
   }

  allEntries: Array<Entry>;

  ngOnInit() {
    this.entryService.getAllEntries().subscribe(entries => this.allEntries = entries);
  }

}
