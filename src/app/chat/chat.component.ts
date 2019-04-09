import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  loading = true;
  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  closeChat() {
    this.router.navigate([{ outlets: { 'chat': null }}]);
  }

}
