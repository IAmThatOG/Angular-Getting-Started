import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  filteredProducts: IProduct[];

  products: IProduct[];

  constructor(private _productService: ProductService) {
    this.filteredProducts = this.products;
    this.listFilter = null;
    this.products = _productService.getProducts();
  }

  ngOnInit() {
    console.log('on init');
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  getOnRatingClickedResponse(message: String): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
