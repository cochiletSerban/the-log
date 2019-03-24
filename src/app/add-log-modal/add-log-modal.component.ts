import { EntryService } from './../services/entry.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Input, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { Entry } from '../objects/entry';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-add-log-modal',
  templateUrl: './add-log-modal.component.html',
  styleUrls: ['./add-log-modal.component.scss']
})

export class AddLogModalComponent implements OnInit, AfterViewInit {
  modalInstance: any;
  logForm =  new FormGroup({
    logTitle: new FormControl('', Validators.required),
    logContent: new FormControl('', Validators.required),
    logTags: new FormControl('')
  });

  constructor(private entryService: EntryService, private elRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  this.modalInstance = M.Modal.init(this.elRef.nativeElement.querySelector('.modal'), {});
  }

  openModal() {
    this.logForm.reset();
  }

  closeModal(param = null) {
    this.modalInstance.close();
  }

  addEntry() {
    if (this.logForm.valid) {
      const entry: Entry = this.logForm.value;
      this.entryService.addEntry(entry).subscribe(res => {
        this.closeModal();
        M.toast({html: 'gg wp'});
      }, err => {
        this.closeModal();
      });


    }
  }

  get isContentValid() {
    return this.logForm.get('logContent').valid && this.logForm.get('logContent').touched;
  }

  get isContentInvalid() {
    return !this.logForm.get('logContent').valid && this.logForm.get('logContent').touched;
  }

  get isTitleValid() {
    return this.logForm.get('logTitle').valid && this.logForm.get('logTitle').touched;
  }

  get isTitleInvalid() {
    return !this.logForm.get('logTitle').valid && this.logForm.get('logTitle').touched;
  }

  get isEntryValid() {
    return this.logForm.valid;
  }

}
