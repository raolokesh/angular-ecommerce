import { Component } from '@angular/core';
import { ShopService } from '../service/shop/shop.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  data: any;

  constructor(private productservice:ShopService){
  }
  getData() {
    this.productservice.getProduct('store/collection').subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  getDataPrint(){
    console.log(this.data);
  }

}
