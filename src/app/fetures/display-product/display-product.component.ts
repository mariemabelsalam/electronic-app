import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../shared/pipes/search/search.pipe';
import { CardproductComponent } from "../components/cardproduct/cardproduct.component";
import { ProductService } from './../../core/services/products/product.service';
import { Product } from '../../shared/interfaces/IProduct/iproduct';

@Component({
  selector: 'app-display-product',
  imports: [CardproductComponent, SearchPipe, FormsModule],
  templateUrl: './display-product.component.html',
  styleUrl: './display-product.component.scss'
})
export class DisplayProductComponent {

  constructor(private readonly ProductService: ProductService) { }


  searchItem: string = ''
  @Input() inHome: boolean = false;
  allProduct: Product[] = []


  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this.ProductService.getProducts().subscribe({
      next: (res) => {
        if (this.inHome) {
          this.allProduct = res.products.slice(50, 67)
          // console.log(this.allProduct);

        }
        else {
          this.allProduct = res.products;
        }

        // console.log(this.allProducts);
      }
    })
  }


}
