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

  lpTextArr = [`We won't forget your stories` , 'Do tell us your stories, our clouds are great listeners',
   `We promise we won't tell your mom`,
  `Let it rain with stories`, `Do you even cloud Bro?`, `Let me tell you a story...`,
  `More stories than rain drops on a rainy day`];

  lpText = this.lpTextArr[1];

  bgs: BgArray = {
    url: [
          "https://wallpapercave.com/wp/jIVlXmB.jpg",
          "http://files.all-free-download.com//downloadfiles/wallpapers/1920_1200/hdr_sky_wallpaper_landscape_nature_1364.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLKseNIqi9DU37tkqfJr8mrxyrUG_bq_tpLb50j1vSrEodkuBMpw",
          "http://cdn.desktopwallpapers4.me/wallpapers/nature/1920x1200/4/36194-purple-stormy-clouds-above-the-lake-1920x1200-nature-wallpaper.jpg",
          "http://eskipaper.com/images/sky-wallpaper-34.jpg",
          "http://www.idigitalemotion.com/tutorials/guest/stellar/sky.jpg",
          "http://webneel.com/wallpaper/sites/default/files/images/04-2013/natural-scenery-wallpaper.jpg"
        ]
  };

  constructor(private bg: GetBgService, private render: Renderer2, private ref: ElementRef) {}

  ngOnInit() {
    // this.bg.getBg().subscribe(resp => this.bgs = resp);
    // setInterval(() => {
    //   this.lpText = this.lpTextArr[this.getRandomizer(0, this.lpTextArr.length - 1)];
    // }, 3500);
  }

  ngAfterViewInit() {
    $('.slider').slider();
  }

  getRandomizer(bottom, top) {
    return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
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
