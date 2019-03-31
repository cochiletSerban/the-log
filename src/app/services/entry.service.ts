import { Router } from '@angular/router';
import { Entry } from './../objects/entry';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operator/delay';
import { Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class EntryService {

  private privateEntryAddedSource = new Subject <Entry>();
  privateEntryAdded$ = this.privateEntryAddedSource.asObservable();

  private feedEntryAddedSource = new Subject <Entry>();
  feedEntryAdded$ = this.feedEntryAddedSource.asObservable();
  
  entryUrl = environment.apiUrl + '/entries';


  constructor(private router: Router, private http: HttpClient, private auth: AuthService) { }

  addEntry(entry) {

    if (this.router.url === '/user-profile') {

      console.log('adding to private logs ' + entry);
      return  this.updateEntryList(entry, 'private');

    } else {

      console.log('adding logs to feed ' + entry);
      return this.updateEntryList(entry, 'feed');

    }
  }

  updateEntryList(entry: Entry, type) {
    if (type === 'private') {
      return this.http.post(this.entryUrl, {...entry, private: true}).map((ent: Entry) => {
        console.log(ent);
        this.privateEntryAddedSource.next(ent);
      });
    } else {
      return this.http.post(this.entryUrl, {...entry, private: false}).map((ent: Entry) => {
        console.log(ent);
        this.feedEntryAddedSource.next(ent);
    });
  }
}

  getPublicEntries() {
    return this.http.get<Entry[]>(environment.apiUrl + '/users/' +
    this.auth.getUserDetailes()._id + '/entries', {params: {private: 'false'}});
  }

  getPrivateEntries() {
    return this.http.get<Entry[]>(environment.apiUrl + '/users/' +
    this.auth.getUserDetailes()._id + '/entries', {params: {private: 'true'}});
  }

  getAllEntries() {
    return this.http.get<Entry[]>(this.entryUrl, {params: {private: 'false'}});
  }



}
