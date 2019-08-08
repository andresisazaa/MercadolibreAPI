import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  BASE_URL = 'https:api.mercadolibre.com';

  constructor(private http: HttpClient) { }

  getProducts(query: string) {
    return this.http.get(`${this.BASE_URL}/sites/MCO/search?q=${query}`)
      .pipe(map((res: Object) => {
        let results = res['results'];
        let products = [];
        Object.keys(results).forEach(key => {
          const product = results[key];
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
