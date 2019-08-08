import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  products = [];
  constructor(private productsService: ProductsService) { }

  search(query: string) {
    if (!query) return;
    this.productsService.getProducts(query).subscribe(products => {
      this.products = products;
      console.log(this.products);
    });
  }
}
