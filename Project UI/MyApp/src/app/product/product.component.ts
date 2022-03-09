import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { DashboardService } from "../dashboard/dashboard.service";
import { LoginService } from "../login/login.service";
import { Order } from "../shared/order";
import { Product } from "../shared/product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  public successMessage;
  public errorMessage;
  public emailId;
  public prodId;
  public product: Product;

  constructor(private router: ActivatedRoute, private serv: DashboardService,
              private custServ: LoginService, private snack: MatSnackBar,
              private route: Router, private loginservice: LoginService) { }
  public ngOnInit() {
    this.router.params.subscribe((s) => {this.emailId = s.emailId, this.prodId = s.prodId; });
    this.serv.getProduct(this.prodId).subscribe((s) => {
      this.product = s;
      // console.log(this.product);
    });
  }
  public buy() {
    this.successMessage = "";
    this.errorMessage = "";
    const ord = new Order();
    const dt = new Date();
    let price: number = (this.product.price);
    price *= (1 - (this.product.pSeller[0].pDiscount));
    ord.date = dt;
    ord.price = price;
    ord.prodId = this.prodId;
    this.custServ.cust(this.emailId, ord).subscribe((s) => {
      this.successMessage = s.message;
      this.snack.open(this.successMessage, "", {
        duration: 1000,
        panelClass: ["green-snackbar"],
      });
    }, (err) => {
      this.errorMessage = err.error.message;
      this.snack.open(this.errorMessage, "", {
        duration: 1000,
        panelClass: ["red-snackbar"],
      });
    });
  }
  public back() {
    history.back();
  }

  public view() {
    this.route.navigate(["/view-orders", this.emailId]);
  }

  public goToHome() {
    this.route.navigate(["dashboard"]);
  }

  public logout() {
    this.loginservice.logOut();
  }
}
