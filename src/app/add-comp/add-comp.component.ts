import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../card/cards.service';
import { ProductModel } from '../card/product.model';

@Component({
  selector: 'app-add-comp',
  templateUrl: './add-comp.component.html',
  styleUrls: ['./add-comp.component.css']
})
export class AddCompComponent implements OnInit {

  constructor(private ps:ProductsService) { }

  ngOnInit(): void {
  }

  addItem(product:ProductModel){
    console.log("You Clicked the button");
    console.log(product);
    this.ps.addProduct(product)
  }

}
