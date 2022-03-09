import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "../shared/user";
import { Order } from "./../shared/order";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) { }

  public login(data): Observable<User> {

    return this.http.post<User>("http://localhost:3000/login", data);
  }

  public cust(data, prodId): Observable<any> {
    return this.http.put<any>("http://localhost:3000/getcustomer/" + data, prodId);
  }

  public order(emailId): Observable<Order[]> {
    return this.http.get<Order[]>("http://localhost:3000/getorders/" + emailId);
  }

  public logOut() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
