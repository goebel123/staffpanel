import {RouterModule, Routes} from '@angular/router';
import {ChecktableComponent} from './checktable/checktable.component';
import {NgModule} from '@angular/core';
import {OcpComponent} from './ocp.component';
import {AuthGuard} from '../auth/auth.guard';
import {OcpStartComponent} from './ocp-start/ocp-start.component';
import {OrderDetailComponent} from './checktable/order-detail/order-detail.component';
import {OrderEditComponent} from './checktable/order-detail/order-edit/order-edit.component';

const ocpRoutes: Routes = [
  {path: 'ocp', component: OcpComponent, canActivate: [AuthGuard], children: [
      {path: '', component: OcpStartComponent, canActivate: [AuthGuard]},
      {path: 'checktable', component: ChecktableComponent, canActivate: [AuthGuard]},
      {path: 'checktable/:id', component: OrderDetailComponent, canActivate: [AuthGuard]},
      {path: 'checktable/:id/edit', component: OrderEditComponent, canActivate: [AuthGuard]}
    ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(ocpRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class OcpRoutingModule {}
