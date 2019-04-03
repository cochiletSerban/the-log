import { Injectable } from '@angular/core';

@Injectable()
export class InternatinonalizationService {

  public engLabels = {
    addModal: { //
      modalTitle: 'Add a new entry',
      title: 'Entry title',
      content: 'Entry content',
      tags: 'Entry tags',
      cancel: 'Cancel',
      submit: 'Add Entry',
      toaster: 'Entry added succesfully'
    },
    adminProfile: { //
      switchOn: 'On',
      swicthOff: 'Off',
      submit: 'Submit',
      toasterActive: 'account was activated',
      toasterDeactive: 'account was deactivated'
    },
     userProfile: { //
       pageTitle: 'entires',
       tab1: 'Board entries',
       tab2: 'Private entries',
     },
     feed: { //
       pageTitle: 'Latest Board Entires',
       search: 'Search entries',
       added: 'Added by',
       date: 'date ',
       tags: 'tags',
       deleteMsg1: 'Are you sure you want to delete ',
       deleteMsg2: ' entries',
       yes: 'yes',
       no: 'no',
       toaster: 'entries were deleted'
     },
     nav: {//
      board: 'Board',
      myEntries: 'My entries',
      logout: 'Logout'
     }
  };

  public roLabels = {
    addModal: {
      modalTitle: 'Adauga o intrare noua',
      title: 'Titlu intrare',
      content: 'Continut intrare',
      tags: 'Etichete intrare',
      cancel: 'Anuleaza',
      submit: 'Adauga intrare',
      toaster: 'Intrarea a fost adaugata'
    },
    adminProfile: {
      switchOn: 'activat',
      swicthOff: 'deactivat',
      submit: 'Confirma',
      toasterActive: 'contul a fost activat',
      toasterDeactive: 'contul a fost dezactivat'
    },
     userProfile: {
       pageTitle: 'intrari',
       tab1: 'Intrari publice',
       tab2: 'Intrari private',
     },
     feed: {
       pageTitle: 'Cele mai recente intrari',
       search: 'Cauta prin intrari',
       added: 'Adaugat de',
       date: 'Data ',
       tags: 'etichete',
       deleteMsg1: 'Esti sigur ca vrei sa stergi ',
       deleteMsg2: ' intrari',
       yes: 'da',
       no: 'nu',
       toaster: 'intrarile au fost sterse'
     },
     nav: {
      board: 'Intrari publice',
      myEntries: 'Intrarile mele',
      logout: 'delogare'
     }
  };

  labels = this.engLabels;

  constructor() { }

  swithcLanguage() {
    if (this.labels === this.roLabels) {
      this.labels = this.engLabels;
    } else {
      this.labels = this.roLabels;
    }
  }

}
