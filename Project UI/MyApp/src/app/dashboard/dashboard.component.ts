import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { LoginService } from "../login/login.service";
import { Order } from "./../shared/order";
import { DashboardService } from "./dashboard.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  public errorMessage: string;
  public productsAll;
  public products;
  public search;
  public emailId;
  public successMessage;
  public filter;
  public categories = ["Furniture", "Electronics", "Clothing", "Shoes"];
  public discount = [];
  public data;

  constructor(private serv: DashboardService, private route: ActivatedRoute,
              private loginService: LoginService, private router: Router, private snack: MatSnackBar) { }

  public ngOnInit() {
    this.emailId = localStorage.getItem("emailId");
    this.errorMessage = "";
    this.filter = "";
    this.data = true;

    this.serv.getAllProducts().subscribe((success) => {
      this.productsAll = success;
      this.categ();
    }, (err) => {
      this.errorMessage = err.error.message;
      this.snack.open(this.errorMessage, "", {
        duration: 1000,
        panelClass: ["red-snackbar"],
      });
    });
  }
  public display(filter) {
    this.filter = filter;
    this.data = false;
    if (filter === "All") {

      return this.products = this.productsAll.slice();
    } else {
      this.products = this.productsAll.filter((ele) => {
        if (ele.pCategory === filter) {
          return true;
        }
      });
    }
  }
  public show() {
    this.data = false;
    this.products = this.productsAll.filter((ele) => {
      if (ele.pName.toUpperCase().match(this.search.toUpperCase())) {
        return true;
      }
    });
  }
  public prodDesc(prodId) {
    this.router.navigate(["/product/" + this.emailId, +prodId]);
  }
  public buy(prodId) {
    this.successMessage = "";
    this.errorMessage = "";
    const ord = new Order();
    const dt = new Date();
    ord.date = dt;
    this.productsAll.forEach((e) => {
      if (e.id === prodId) {
        ord.price = e.price * (1 - e.pSeller[0].pDiscount);
      }
    });
    ord.prodId = prodId;
    this.loginService.cust(this.emailId, ord).subscribe((s) => {
      this.snack.open(s.message, "", {
        duration: 1000,
        panelClass: ["green-snackbar"],
      });
    }, (err) => {
      this.snack.open(err.error.message, "Item failed to add.", {
        duration: 1000,
        panelClass: ["red-snackbar"],
      });
    });
  }

  public categ() {
    this.categories.forEach((cat) => {
      const disc = [];
      this.productsAll.forEach((prod) => {
        if (prod.pCategory === cat) {
          disc.push(prod.pSeller[0].pDiscount);
        }
      });
      this.discount.push((disc.sort()[(disc.length - 1)]) * 100);
      // console.log(this.discount);
    });
  }
  public snackBar() {
    this.snack.open("You will be notified", "", { duration: 1000, panelClass: ["green-snackbar"] });
  }

  public logout() {
    // this.productsAll=[];
    this.loginService.logOut();
  }

  public view() {
    // console.log(this.emailId);

    this.router.navigate(["/view-orders", this.emailId]);
  }
  public goToHome() {
    this.router.navigate(["dashboard"]);
  }
}
