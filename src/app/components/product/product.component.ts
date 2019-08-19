import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  sellerName: string;
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getSeller(this.product.sellerID).subscribe((sellerNickname) => {
      this.sellerName = sellerNickname;
    });
  }

}
