import { Injectable } from "@angular/core";
import { IProduct } from "../models/product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private _productUrl = "api/products/products.json";

  constructor(private _httpClient: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(this._productUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMsg = '';
    if (err.error instanceof ErrorEvent) {
      errorMsg = `An error occured: ${err.error.message}`;
    } else {
      errorMsg = `server returned code ${err.status}, error message is: ${
        err.message
      }`;
    }
    console.log(errorMsg);
    return throwError(errorMsg);
  }
}
