import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrdersService} from '../orders.service';
import {Order} from '../../shared/order.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-checktable',
  templateUrl: './checktable.component.html',
  styleUrls: ['./checktable.component.css']
})
export class ChecktableComponent
  implements OnInit, OnDestroy {

  orders: Order[];
  subscription: Subscription;

  constructor(private os: OrdersService) {}

  ngOnInit() {
    this.subscription = this.os.ordersChanged
      .subscribe(
        (orders: Order[]) => {
          this.orders = orders;
        }
      );
    this.orders = this.os.getOrders();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
