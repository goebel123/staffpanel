import {Injectable} from '@angular/core';
import {Order} from '../shared/order.model';
import {Item} from '../shared/item.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class OrdersService {
  ordersChanged = new Subject<Order[]>();

  orders: Order[] = [
    new Order(0, [
      new Item(123, 'A-123', 'Football Neu Rot', 1, 1, 'dhl')
    ]),
    new Order(1, [
      new Item(1234, 'A-1234', 'Kugelschreiber Blau 5er Pack', 1, 1, 'dhl')
    ]),
    new Order(2, [
      new Item(12345, 'A-12345', 'Seifenspender', 1, 1, 'dpd')
    ])
  ];

  constructor() {}

  updateOrder(index: number) {
    this.orders.splice(index, 1);
    this.ordersChanged.next(this.orders.slice());
  }

  getOrders() {
    return this.orders.slice();
  }

}
