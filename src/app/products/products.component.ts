import { Component } from '@angular/core';
import { ShopService } from "../service/shop/shop.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  id: any;
  Products:any;
  constructor(private getProducts:ShopService,private route:ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['data'];
    });
    this.getProducts.getCollection('store/products/?collection_id='+this.id).subscribe(
      (response) => {
        this.Products = response;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  getdata(){
    this.getProducts.getCollection('store/products/?collection_id='+this.id).subscribe(
      (response) => {
        this.Products = response;
      },
      (error) => {
        console.error('Error:', error);
      }
    );

  }

  getdataprint(){
    console.log(this.Products)
  }

}
