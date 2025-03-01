import { Component, EventEmitter, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AllProductsService } from '../../../../services/all-products.service';

@Component({
  selector: 'app-home-best-selling',
  templateUrl: './home-best-selling.component.html',
  styleUrl: './home-best-selling.component.scss',
})
export class HomeBestSellingComponent {
  @Output() navigateCarousel: EventEmitter<string> = new EventEmitter();

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 4.5,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
      1200: {
        items: 4.5,
      },
    },
    nav: true,
  };

  constructor(private productsServ: AllProductsService) {}
  products = this.productsServ.getproducts('all');
}
