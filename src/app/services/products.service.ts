import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  BASE_URL = 'https://api.mercadolibre.com';

  constructor(private http: HttpClient) { }

  getProducts(query: string) {
    return this.http.get(`${this.BASE_URL}/sites/MCO/search?q=${query}`)
      .pipe(map((res: Object) => {
        let results = res['results'];
        let products: Product[] = [];
        Object.keys(results).forEach(key => {
          const { title, price, thumbnail, permalink, seller } = results[key];
          const product = new Product(title, price, thumbnail, permalink, seller.id);
          products.push(product);
        });
        return products;
      }));
  }

  getSeller(sellerID: Number) {
    return this.http.get(`${this.BASE_URL}/users/${sellerID}`)
      .pipe(map(res => {
        return res['nickname'];
      }));
  }
}
