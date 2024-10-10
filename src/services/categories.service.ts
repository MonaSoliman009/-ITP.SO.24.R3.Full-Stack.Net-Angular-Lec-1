import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icategory } from '../models/icategory';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient) {}

  getAllCategories(): Observable<Icategory[]> {
    return this.httpClient.get<Icategory[]>(`${environment.baseUrl}/categories`);
  }
}
