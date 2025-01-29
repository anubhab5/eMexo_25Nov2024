import { Component } from '@angular/core';
import { ProductService } from '../new-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService],
})
export class ProductsComponent {
  constructor(private productSvc: ProductService) {}

  ngOnInit() {}

  /**
   * get Request
   */
  getProducts() {
    this.productSvc.getProducts().subscribe(
      (resp) => {
        debugger;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getProduct(id: number) {
    this.productSvc.getSingleProduct(id).subscribe((resp) => {
      debugger;
    });
  }

  createProduct(product: any) {
    this.productSvc.createProduct(product).subscribe((resp) => {
      debugger;
    });
  }

  updateProduct(product: any) {
    this.productSvc.updateProduct(product, 1).subscribe((resp) => {
      debugger;
    });
  }

  deleteProduct(id: number) {
    this.productSvc.deleteProduct(id).subscribe((resp) => {
      debugger;
    });
  }
}
