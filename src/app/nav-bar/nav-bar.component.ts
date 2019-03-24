import { Component, OnInit, EventEmitter, ElementRef, AfterViewInit} from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
declare var $: any;
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, AfterViewInit {


  constructor(private elRef: ElementRef, private router: Router, private auth: AuthService) {
  }

  ngOnInit() {

  }

  get hideNav() {
    if (this.router.url === '/' || this.router.url === '/login') {
      return true;
    }
    return false;
  }

  get isAdmin() {
    if (this.router.url === '/admin-profile') {
      return true;
    }
    return false;
  }

  get isManager() {
    if (this.router.url === '/manager-profile') {
      return true;
    }
    return false;
  }


  ngAfterViewInit(): void {
    M.Sidenav.init(this.elRef.nativeElement.querySelector('.sidenav'), {});
  }


}
