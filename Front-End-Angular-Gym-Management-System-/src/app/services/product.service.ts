import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

// url:string ='http://localhost:8000';
  constructor(private http:HttpClient) { }

    listproducts(){
      // return this.http.get<any>(this.url+'/api/products');

      return this.http.get('http://127.0.0.1:8000/api/products')
    }

}
