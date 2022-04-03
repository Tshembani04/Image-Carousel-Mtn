import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image-carousel-mtn';

  serviceArray1:any=[
    {
      imageName: "../assets/mtn-images/data-mobile.svg"
    },
  ]

  serviceArray2:any=[
    {  imageName:"../assets/mtn-images/internet.svg" },
  ]
    serviceArray3:any=[
    {
      imageName: "../assets/mtn-images/devices.svg"
    },
  ]
  serviceArray4:any=[{
    imageName: "../assets/mtn-images/plans.svg"

  }
  ]
  serviceArray5:any=[
    {
      imageName: "../assets/mtn-images/upgrade.svg"
    },
  ]

  serviceOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      // 940: {
      //   items: 4
      // }
    },
    nav: true
  }
}
