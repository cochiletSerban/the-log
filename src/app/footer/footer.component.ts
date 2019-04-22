import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { InternatinonalizationService } from '../services/internatinonalization.service';
declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(public router: Router, private elRef: ElementRef, public inter: InternatinonalizationService) { }

  ngAfterViewInit() {


    // reset
    $('html, body').css('height', 'initial');

    // add the good stuff to make it sticky
    $('html').css('position', 'relative');
    $('html').css('min-height', '100%');
    $('body').css('padding-bottom', $('footer').height() + 50);

    // add the good stuff make it responsive
    $( window ).resize(function() {
       $('body').css('padding-bottom', $('footer').height() + 50);
    });

  }

  ngOnInit() {}

  ngOnDestroy(): void {
    $('html, body').css('height', '100%');
    $('body').css('padding-bottom', 'initial');
  }

}
