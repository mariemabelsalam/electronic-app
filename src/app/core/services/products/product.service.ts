import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../shared/environment/environment';
import { allProducts} from '../../../shared/interfaces/IProduct/iproduct';
import { env } from 'process';
import { ISingleProduct } from '../../../shared/interfaces/ISingleProduct/isingle-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly httpClient: HttpClient) { }

  getProducts(): Observable<allProducts> {
    return this.httpClient.get<allProducts>(`${environment.baseUrlProduct}products?limit=150`)
  }

  getSingleProduct(id: number): Observable<ISingleProduct> {
    return this.httpClient.get<ISingleProduct>(`${environment.baseUrlProduct}products/${id}`)
  }
}
