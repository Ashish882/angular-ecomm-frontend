import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products : any = [];

  constructor(private productServices : ProductService ,
    private router:Router) { }

  ngOnInit(): void {

    this.productServices.getAllProducts(8).subscribe(prods => {
      console.log(prods);
      this.products = prods;
    });

  }

  
  AddProduct(id :Number){
 
  }

  selectProduct(id :Number){
    this.router.navigate(['/product',id]);
  }


}
