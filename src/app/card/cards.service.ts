import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel } from "./product.model";


@Injectable(
    {providedIn: 'root'}
)
export class ProductsService{
    private baseUrl:string = "https://tutorial-db3ee-default-rtdb.firebaseio.com/";
    private productsEndPoint = "Products.json";

    constructor(private http:HttpClient){

    }

    getProducts(){
        return this.http.get<ProductModel []>(this.baseUrl + this.productsEndPoint);
    }
}