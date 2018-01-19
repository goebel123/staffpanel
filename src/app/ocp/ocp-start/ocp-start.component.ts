import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ocp-start',
  templateUrl: './ocp-start.component.html',
  styleUrls: ['./ocp-start.component.css']
})
export class OcpStartComponent
  implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  navigate(feature: string) {
    this.router.navigate([feature], {relativeTo: this.route});
  }

}
