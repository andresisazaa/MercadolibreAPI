import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  products: Product[] = [];
  constructor(private productsService: ProductsService) { }

  search(query: string) {
    if (!query) return;
    this.productsService.getProducts(query).subscribe(products => {
      this.products = products;
    });
  }
}
