import { ProductService } from './../../../core/services/products/product.service';
import { Component } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { Product } from '../../../shared/interfaces/IProduct/iproduct';


@Component({
  selector: 'app-carsoul',
  imports: [CarouselModule],
  templateUrl: './carsoul.component.html',
  styleUrl: './carsoul.component.scss'
})
export class CarsoulComponent {
  constructor(private readonly productService: ProductService) { }

  someProduct: Product[] = []
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 300,
    navText: ['<i class="fa-solid fa-arrow-left text-orange fs-4"></i>', '<i class="fa-solid fa-arrow-right text-orange fs-4"></i>'],
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
      940: {
        items: 4
      }
    },
    nav: true
  }



  ngOnInit(): void {
    this.getProducts()
  }


  getProducts() {
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.someProduct = res.products.slice(140, 150)
      }
    })

  }
}
