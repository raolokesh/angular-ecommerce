import { Component } from '@angular/core';
import { ShopService } from '../service/shop/shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  data: any;

  constructor(private productservice:ShopService,private router:Router){
  }
  
  ngOnInit() {
    this.productservice.getCollection('store/collection').subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  navigateToPage(pageUrl: string,id:number) {
    this.router.navigate([pageUrl,id]);
  }
}
