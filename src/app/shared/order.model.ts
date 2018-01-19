import {Item} from './item.model';

export class Order {
  constructor(public orderId: number, public items: Item[]) {}
}
