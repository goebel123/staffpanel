import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {OrdersService} from '../../../orders.service';
import {Order} from '../../../../shared/order.model';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  id: number;
  order: Order;

  constructor(private os: OrdersService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];  // the + casts the url(string) to a number
          this.order = this.os.getOrder(this.id);
        }
      );
  }

}
