import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productList: any[] = [];
  cartObj: any = {
    CartId: 0,
    CustId: 1,
    ProductId: 0,
    Quantity: 0,
    AddedDate: '2023-04-27T07:12:40.926Z',
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    debugger;
    this.loadAllProducts();
  }

  loadAllProducts() {
    debugger;
    this.productService.getAllProducts().subscribe((results: any) => {
      this.productList = results.data;
    });
  }

  addItemToCart(productId: number) {
    debugger;
    this.cartObj.ProductId = productId;
    this.productService.addToCart(this.cartObj).subscribe((results: any) => {
      if (results.result) {
        alert('Product Added to Cart successfully');
        this.productService.cartAddedSubject.next(true);
      }
    });
  }
}
