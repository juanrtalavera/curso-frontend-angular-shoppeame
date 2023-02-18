import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }


  getProducts(){
    return this.http.get("https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products")
  }

  getProductByid(id:number){

    return this.http.get("https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products"+id)
  }

  addProduct(product:any):void{
   this.http.post("https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products",product).subscribe()

  }
  delete(id:number){
    return this.http.delete("https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products" + '/' + id)
  }

  putProduct(nuevoProducto:any){
    return this.http.put("https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products" + '/' + nuevoProducto.id,nuevoProducto)
  }

}