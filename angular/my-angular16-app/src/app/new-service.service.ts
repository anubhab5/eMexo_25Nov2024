import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('http://localhost:5000/items');
  }

  getSingleProduct(id: number) {
    return this.http.get(`http://localhost:5000/items/${id}`);
  }

  createProduct(product: any) {
    return this.http.post('http://localhost:5000/items', product);
  }

  updateProduct(product: any, id: number) {
    return this.http.put(`http://localhost:5000/items/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:5000/items/${id}`);
  }
}
