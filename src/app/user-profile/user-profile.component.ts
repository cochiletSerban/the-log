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

  publicEntries: Array<Entry> = [
    {
      logTitle: 'ent1',
      logContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odio repellendus quibusdam porro enim
      Consequaturasdf sapiente incidunt voluptate iste laudantium vitae
      nobis nemo quaerat, eius accusamus ullam quidem? Quo, cupiditate?`,
      logTags: 'sefu, yolo'
    },
    {
      logTitle: 'ent2',
      logContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odio repellendus quibusdam porro enim
      Consequatur sapiente iasdfasdncidunt voluptate iste laudantium vitae
      nobis nemo quaerat, eius accusamus ullam quidem? Quo, cupiditate?`,
      logTags: 'sefu, yolo'
    },
    {
      logTitle: 'ent3',
      logContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odio repellendus quibusdam porro enim
      Consequatur sapiente sdfaincidunt voluptate iste laudantium vitae
      nobis nemo quaerat, eius accusamus ullam quidem? Quo, cupiditate?`,
      logTags: 'sefu, yolo'
    },
    {
      logTitle: 'ent4',
      logContent: `Lorem ipsumasd dolor sit amet consectetur adipisicing elit. Aliquid odio repellendus quibusdam porro enim
      Consequatur sapiente incidunt voluptate iste laudantium vitae
      nobis nemo quaeratasd, eius accusamus ullam quidem? Quo, cupiditate?`,
      logTags: 'sefu, yolo'
    },
    {
      logTitle: 'ent5',
      logContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odio repellendus quibusdam porro enim
      Consequatur sapasdfiente incidunt voluptate iste laudantium vitae
      nobis nemo quaerat, eius accusamus ullam quidem? Quo, cupiditate?`,
      logTags: 'sefu, yolo'
    },
  ];
  privateEntries = this.publicEntries.slice(0, 3);

  constructor(private entryService: EntryService) {
    entryService.entryAdded$.subscribe(entry => {
      this.privateEntries.push(entry);
    });
  }

  ngOnInit() {
    $('.tabs').tabs();
    this.name = localStorage.getItem('username');
  }
}

