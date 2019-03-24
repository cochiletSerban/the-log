import { Router } from '@angular/router';
import { Entry } from './../objects/entry';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operator/delay';
import { Subject } from 'rxjs';

@Injectable()
export class EntryService {

  private privateEntryAddedSource = new Subject <Entry>();
  privateEntryAdded$ = this.privateEntryAddedSource.asObservable();

  private feedEntryAddedSource = new Subject <Entry>();
  feedEntryAdded$ = this.feedEntryAddedSource.asObservable();

  private publicEntries: Array<Entry> = [
    {
      logTitle: 'ent1',
      logContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odio repellendus quibusdam porro enim
      Consequaturasdf sapiente incidunt voluptate iste laudantium vitae
      nobis nemo quaerat, eius accusamus ullam quidem? Quo, cupiditate?`,
      logTags: 'sefu, yolo',
      addedBy: 'mihai',
      addedOn: new Date()
    },
    {
      logTitle: 'ent2',
      logContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odio repellendus quibusdam porro enim
      Consequatur sapiente iasdfasdncidunt voluptate iste laudantium vitae
      nobis nemo quaerat, eius accusamus ullam quidem? Quo, cupiditate?`,
      logTags: 'sefu, yolo',
      addedBy: 'michael',
      addedOn: new Date()
    },
    {
      logTitle: 'ent3',
      logContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odio repellendus quibusdam porro enim
      Consequatur sapiente sdfaincidunt voluptate iste laudantium vitae
      nobis nemo quaerat, eius accusamus ullam quidem? Quo, cupiditate?`,
      logTags: 'sefu, yolo',
      addedBy: 'ion',
      addedOn: new Date()
    },
    {
      logTitle: 'ent4',
      logContent: `Lorem ipsumasd dolor sit amet consectetur adipisicing elit. Aliquid odio repellendus quibusdam porro enim
      Consequatur sapiente incidunt voluptate iste laudantium vitae
      nobis nemo quaeratasd, eius accusamus ullam quidem? Quo, cupiditate?`,
      logTags: 'sefu, yolo',
      addedBy: 'John',
      addedOn: new Date()
    },
    {
      logTitle: 'ent5',
      logContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odio repellendus quibusdam porro enim
      Consequatur sapasdfiente incidunt voluptate iste laudantium vitae
      nobis nemo quaerat, eius accusamus ullam quidem? Quo, cupiditate?`,
      logTags: 'sefu, yolo',
      addedBy: 'larisa',
      addedOn: new Date()
    },
  ];


  constructor(private router: Router) { }

  addEntry(entry: Entry) {

    if (this.router.url === '/user-profile') {

      console.log('adding to private logs ' + entry);
      this.updateEntryList(entry, 'private');

      return of(entry).delay(100);

    } else {

      this.updateEntryList(entry, 'feed');
      console.log('adding logs to feed ' + entry);

      return of(entry).delay(100);
    }
  }

  updateEntryList(entry: Entry, type) {
    if (type === 'private') {
      this.privateEntryAddedSource.next(entry);
    } else {
      this.feedEntryAddedSource.next(entry);
    }
  }

  getPublicEntries() {
    return of (this.publicEntries).delay(100);
  }

  getPrivateEntries() {
    return of (this.publicEntries.slice(0, 3)).delay(100);
  }

  getAllEntries() {
    return of (this.publicEntries.concat(this.publicEntries)).delay(100);
  }



}
