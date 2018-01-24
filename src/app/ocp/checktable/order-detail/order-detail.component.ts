import {Component, OnInit} from '@angular/core';
import {Order} from '../../../shared/order.model';
import {OrdersService} from '../../orders.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent
  implements OnInit {

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

  edit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  nextOrder() {
    this.id ++;
    if (this.os.checkForNextOrder(this.id)) {
      this.router.navigate(['../' + this.id], {relativeTo: this.route});
    } else {
      this.router.navigate(['/ocp']);
    }
  }

}
