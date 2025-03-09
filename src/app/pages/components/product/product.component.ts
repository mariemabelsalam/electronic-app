import { Component } from '@angular/core';
import { DisplayProductComponent } from "../../../fetures/display-product/display-product.component";

@Component({
  selector: 'app-product',
  imports: [DisplayProductComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

}
