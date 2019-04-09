import { Component, OnInit } from '@angular/core';
import { Router,  NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-chat-trigger',
  templateUrl: './chat-trigger.component.html',
  styleUrls: ['./chat-trigger.component.scss']
})
export class ChatTriggerComponent implements OnInit {
  hide = false;
  constructor(private router: Router) {
    router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe((event: NavigationEnd) => {
      if (event.url.includes('(') || event.url === '/') {
        this.hide = true;
      } else {
        this.hide = false;
      }

    });
   }

  ngOnInit() {}

  openChat() {
    this.router.navigate([{ outlets: { 'chat': [ 'chat'] }}]);
  }

}
