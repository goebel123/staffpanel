import {Injectable} from '@angular/core';
import {Order} from '../shared/order.model';
import {Item} from '../shared/item.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class OrdersService {
  ordersChanged = new Subject<Order[]>();

  orders: Order[] = [
    new Order(1, [
      new Item(8543563476, '489849861', 'Football Neu Rot', 1, 1, 'dhl', false),
      new Item(9342364366, '815169412', 'Football Neu Blau', 1, 1, 'dhl', true),
      new Item(5329352344, '584821586', 'Football Neu Gelb', 1, 1, 'dhl', false)
    ]),
    new Order(2, [
      new Item(8543234476, '487367861', 'Football Neu Rot', 1, 1, 'dhl', true),
      new Item(9332464366, '815214312', 'Football Neu Blau', 1, 1, 'dhl', true),
      new Item(5329623234, '584863466', 'Football Neu Gelb', 1, 1, 'dhl', false)
    ]),
    new Order(3, [
      new Item(12345, '12345', 'Seifenspender', 1, 1, 'dpd', true)
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

  getOrder(id: number) {
    return this.orders[id];
  }

  checkForNextOrder(id: number) {
    return this.orders.length > id;
  }

  checkIfActive() {
    return this.orders.length >= 1;
  }


}
