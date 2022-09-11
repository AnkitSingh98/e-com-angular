import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private httpClient: HttpClient) { }


  loadCategories(){

    return this.httpClient.get(`${environment.baseUrl}/category`)
  }


}
