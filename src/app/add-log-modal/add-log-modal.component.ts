import { EntryService } from './../services/entry.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { Entry } from '../objects/entry';
declare const Materialize;

@Component({
  selector: 'app-add-log-modal',
  templateUrl: './add-log-modal.component.html',
  styleUrls: ['./add-log-modal.component.scss']
})
export class AddLogModalComponent implements OnInit {

  modalActions = new EventEmitter<string|MaterializeAction>();

  logForm =  new FormGroup({
    logTitle: new FormControl('', Validators.required),
    logContent: new FormControl('', Validators.required),
    logTags: new FormControl('')
  });

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.modalActions.subscribe(res => {
      console.log(res.params[1]);

      if (res.params[1] === undefined) { /////////// ?
        Materialize.toast('There was a error: ' + res.params[1] , 4000);
        return;
      }

      if (res.params[1] === 'success') {
        Materialize.toast('Your Entry has been added', 4000);
      }

    });
  }

  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
    this.logForm.reset();
  }

  closeModal(param = '') {
    this.modalActions.emit({ action: 'modal', params: ['close', param] });
  }

  addEntry() {
    if (this.logForm.valid) {

      const entry: Entry = this.logForm.value;
      this.entryService.addEntry(entry).subscribe(res => {
        this.closeModal('success');
      }, err => {
        this.closeModal(err);
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
