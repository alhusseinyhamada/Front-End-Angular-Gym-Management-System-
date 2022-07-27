import { Component, OnInit } from '@angular/core';
import{ProductService} from '../../../../services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

products:any;
  constructor(private productservice:ProductService) {

    // this.productservice.listproducts().subscribe(data=>this.products=data);
    // console.log(this.products);


   }
//

  showproducts(){
    this.products=this.productservice.listproducts().subscribe(product=>{
       this.products=product;
       console.log(this.products);
    })
  }

  ngOnInit(): void {
    this.showproducts();
   }

}
