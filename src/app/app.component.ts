import { Component } from '@angular/core';
import { ProductModel } from './card/product.model';
import { mock_list } from './card/mock_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TutorialApp';
  products: ProductModel [] = [];

  constructor(){
    for (var item of mock_list){
      console.log(item);
      this.products.push(item);
    }
  }
}
