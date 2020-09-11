import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from './../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CrudService {
url = environment.apiURL;
  constructor(private http:HttpClient) { }
  
  getProducts(){
     return this.http.get(this.url+'/product')
  }

  addProduct(product){
     return this.http.post(this.url+'/product',product)
  }
  geProductById(id){ 
    return this.http.get(this.url+'/product/'+id)
  }
  updateProductById(id,product){
    return this.http.put(this.url+'/product/'+id, product)
  }
  deleteProductById(id){
    return this.http.delete(this.url+'/product'+id)
  }

}
