import { Component } from '@angular/core';
import { ProductService } from '../../../core/services/products/product.service';
import { Product } from '../../../shared/interfaces/IProduct/iproduct';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

  constructor(private readonly productService: ProductService) { }

  someProduct: Product[] = []



  ngOnInit(): void {
    this.getProducts()
  }


  getProducts() {
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.someProduct = res.products.slice(90, 110)
      }
    })

  }
}
