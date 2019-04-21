import { Component, OnInit, EventEmitter, ElementRef, AfterViewInit} from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { InternatinonalizationService } from '../services/internatinonalization.service';
declare var $: any;
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, AfterViewInit {


  constructor(private elRef: ElementRef, private router: Router, public  auth: AuthService, public inter: InternatinonalizationService) {
  }

  ngOnInit() {
    $(window).scroll(function() {
      if ($(window).scrollTop() >= 1) {
          $('nav').removeClass('hide-header');
      } else {
          $('nav').addClass('hide-header');
      }
    });
  }

  get hideNav() {
    if (this.router.url === '/' || this.router.url === '/login'
      || this.router.url === '/login(chat:chat)' ) {
      return true;
    }
    return false;
  }

  get isAdmin() {

    if (!this.auth.isLogedIn()) {
      return false;
    }
    if (this.auth.getUserDetailes().role === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  get isManager() {
    if (!this.auth.isLogedIn()) {
      return false;
    }
    if (this.auth.getUserDetailes().role === 'manager') {
      return true;
    } else {
      return false;
    }
  }


  ngAfterViewInit(): void {
    M.Sidenav.init(this.elRef.nativeElement.querySelector('.sidenav'), {});
  }


}
