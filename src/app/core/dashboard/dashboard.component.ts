import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent
  implements OnInit {

  selectedFeature: string;

  constructor(private router: Router) {}

  navigate(feature: string) {
    this.selectedFeature = feature;
    this.router.navigate(['/' + feature]);
  }

  ngOnInit() {}

}
