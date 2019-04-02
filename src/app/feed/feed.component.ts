import { EntryService } from './../services/entry.service';
import { Entry } from './../objects/entry';
import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as M from 'materialize-css/dist/js/materialize';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, AfterViewInit {
  selectedEntries: Entry[] = [];
  modalInstance;
  searchText: string;
  selected = false;
  constructor(private entryService: EntryService, private router: Router,
    private elRef: ElementRef) {
    entryService.feedEntryAdded$.subscribe(entry => {
      this.allEntries.push(entry);
    });
    entryService.feedNewListAdded$.subscribe(entries => {
      this.allEntries = entries;
    })
   }

  allEntries: Array<Entry>;

  ngOnInit() {
    this.entryService.getAllEntries().subscribe(entries => this.allEntries = entries);
  }

  ngAfterViewInit(): void {
    this.modalInstance = M.Modal.init(this.elRef.nativeElement.querySelector('.modal'), {});
    }

  get isManager() {
    if (this.router.url === '/manager-profile') {
      return true;
    }
    return false;
  }

  pushEntry(addedEntry) {
    if (addedEntry.add) {
      this.selectedEntries.push(addedEntry.entry);
    } else {
      if (this.selectedEntries) {
        this.selectedEntries = this.selectedEntries.filter(ele =>  ele !== addedEntry.entry);
      }
    }
  }

  deleteItems() {
    this.entryService.deleteEntries(this.selectedEntries).subscribe(res => {
      M.toast({html: 'Items deleted succesfully'});
      this.selectedEntries = [];
    });

  }

}
