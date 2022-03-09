import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Product } from "../shared/product";

@Injectable({
  providedIn: "root",
})
export class DashboardService {

  constructor(private http: HttpClient, private route: Router) { }

  public getAllProducts(): Observable<Product> {
    return this.http.get<Product>("http://localhost:3000/getproducts");
  }

  public getProduct( prodId ): Observable<Product> {
    return this.http.get<Product>("http://localhost:3000/getproduct/" + prodId);
  }
}
