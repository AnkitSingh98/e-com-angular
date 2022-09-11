import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private httpClient: HttpClient) { }


  loadProducts(){

    return this.httpClient.get(`${environment.baseUrl}/products`)
  }


  loadProductsByCategory(categoryId:number){

    return this.httpClient.get(`${environment.baseUrl}/category/${categoryId}/products`)

  }
}
