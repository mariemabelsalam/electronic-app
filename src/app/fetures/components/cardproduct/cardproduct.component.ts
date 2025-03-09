import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../../shared/interfaces/IProduct/iproduct';

@Component({
  selector: 'app-cardproduct',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './cardproduct.component.html',
  styleUrl: './cardproduct.component.scss'
})
export class CardproductComponent {

  @Input() product!:Product;
 
 
}
