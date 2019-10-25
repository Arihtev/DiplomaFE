import { IPicture } from './../../../models/site-db/cars';
import { Component, OnInit, Input } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-car-carousel',
  templateUrl: './car-carousel.component.html',
  styleUrls: ['./car-carousel.component.scss']
})
export class CarCarouselComponent implements OnInit {

  @Input() pictures: IPicture[]
  
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
          width: '100%',
          height: '600px',
          thumbnailsColumns: 5,
          // imageAnimation: NgxGalleryAnimation.Slide,
          imageArrowsAutoHide: true,
          imageInfinityMove: true,
          imagePercent: 100,
          thumbnailsPercent: 15,
          thumbnailMargin: 0,
          previewCloseOnClick: true,
          previewInfinityMove: true,
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
    ];

    this.pictures.forEach(pic => {
      let newPic = {small: pic.picture, medium: pic.picture, big: pic.picture}
      this.galleryImages.push(newPic)
    });
  }

  pics(){
    let wtf ="\"" + this.pictures[0].picture + "\""
    console.log(wtf)
  }

}
