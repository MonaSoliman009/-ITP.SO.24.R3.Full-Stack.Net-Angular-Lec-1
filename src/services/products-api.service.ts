import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(`${environment.baseUrl}/products`);
  }

  getProductsByCatId(catId: number): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(
      `${environment.baseUrl}/products?catId=${catId}`
    );
  }

  getProductById(id: number): Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(
      `${environment.baseUrl}/products/${id}`
    );
  }

  addNewProduct(newProduct: Iproduct): Observable<Iproduct> {
    return this.httpClient.post<Iproduct>(
      `${environment.baseUrl}/products`,
      JSON.stringify(newProduct)
    );
  }
}
