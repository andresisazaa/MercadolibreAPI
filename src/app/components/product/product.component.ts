import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  @Input() product;
  sellerName: string;
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getSeller(this.product.seller.id).subscribe((sellerNickname)=> {
      this.sellerName = sellerNickname;
      console.log(this.sellerName);   
    });
  }

}
