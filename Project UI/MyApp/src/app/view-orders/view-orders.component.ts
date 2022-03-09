import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { LoginService } from "../login/login.service";
import { Order } from "../shared/order";

@Component({
  selector: "app-view-orders",
  templateUrl: "./view-orders.component.html",
  styleUrls: ["./view-orders.component.css"],
})
export class ViewOrdersComponent implements OnInit {

  public emailId: string;
  public orders: Order[];
  public errorMessage: string;
  constructor(private route: ActivatedRoute, private loginService: LoginService, private router: Router ) { }
  public ngOnInit() {

    this.route.params.subscribe((s) => {
      this.emailId = s.emailId;
    });
    this.loginService.order(this.emailId).subscribe((s) => {
      console.log(s);

      if (s.length > 1) {
        this.orders = s.slice();
      } else {
        this.orders = [];
      }
    }, (err) => { this.errorMessage = err.error.message; });

  }

  public goToHome() {
    this.router.navigate(["dashboard"]);
  }

  public logout() {
    this.orders = [];
    this.loginService.logOut();
  }
}
