import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OrdersService} from '../orders.service';

@Component({
  selector: 'app-ocp-start',
  templateUrl: './ocp-start.component.html',
  styleUrls: ['./ocp-start.component.css']
})
export class OcpStartComponent
  implements OnInit {

  checktableActive: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private os: OrdersService) {}

  ngOnInit() {
    this.checktableActive = this.os.checkIfActive();
  }

  navigate(feature: string) {
    this.router.navigate([feature], {relativeTo: this.route});
  }

}
