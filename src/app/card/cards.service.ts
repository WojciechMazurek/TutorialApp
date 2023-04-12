import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel } from "./product.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable(
    {providedIn: 'root'}
)
export class ProductsService{
    // private baseUrl:string = "https://tutorial-db3ee-default-rtdb.firebaseio.com/";
    // private productsEndPoint = "Products.json";

    constructor(private db:AngularFireDatabase ){

    }

    getProducts(){
        return this.db.list<ProductModel>("Products").valueChanges();
    }
    addProduct(product:ProductModel){
        this.db.list<ProductModel>("Products").push(product);
    }
}