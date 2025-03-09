import { ProductService } from './../../../core/services/products/product.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISingProduct } from '../../../shared/interfaces/ISingleProduct/isingle-product';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-productdetails',
  imports: [CurrencyPipe],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss'
})
export class ProductdetailsComponent {
  constructor(
    private readonly productService: ProductService,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  product: ISingProduct = {} as ISingProduct
  productId!: number
  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (param) => {
        this.productId = param['id']
        // console.log(this.productId);
      }
    })

    this.productService.getSingleProduct(this.productId).subscribe({
      next: (res) => {
        this.product = res.product
        // console.log(this.product);
      }
    })

  }

}
