import { Router } from '@angular/router';
import { Entry } from './../objects/entry';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operator/delay';
import { Subject } from 'rxjs';

@Injectable()
export class EntryService {

  private entryAddedSource = new Subject <Entry>();
  entryAdded$ = this.entryAddedSource.asObservable();

  constructor(private router: Router) { }

  addEntry(entry: Entry) {
    if (this.router.url === '/user-profile') {
      console.log("adding to private logs " + entry);
      this.updateEntryList(entry);
      return of(entry).delay(100);
    } else {
      console.log("adding logs to feed " + entry);
      return of(entry).delay(100);
    }
  }

  updateEntryList(entry: Entry) {
    this.entryAddedSource.next(entry);
  }
}
