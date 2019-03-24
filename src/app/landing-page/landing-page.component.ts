import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { GetBgService } from '../services/get-bg.service';
import { BgArray } from '../objects/BgArray';


declare var $: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit, AfterViewInit {

  @ViewChild('fa1') fa1;
  @ViewChild('fa2') fa2;


  bgs: BgArray = {
    url: ["https://www.ps4wallpapers.com/wp-content/uploads/2018/01/PS4Wallpapers.com_5a5d669a96788_JessicaNigri.jpg"]
  };

  constructor(private bg: GetBgService, private render: Renderer2, private ref:ElementRef) {}

  ngOnInit() {
    this.bg.getBg().subscribe(resp => this.bgs = resp);
  }

  ngAfterViewInit(){

  }


  onHo(hovering: boolean) {
    if (hovering) {
      this.render.setStyle(this.fa1.nativeElement, 'animation', 'spin 1s forwards');
      this.render.setStyle(this.fa2.nativeElement, 'animation', 'spin 1s forwards');
    } else {
      this.render.setStyle(this.fa1.nativeElement, 'animation', 'spinBack 1s forwards');
      this.render.setStyle(this.fa2.nativeElement, 'animation', 'spinBack 1s forwards');
    }
  }
}
