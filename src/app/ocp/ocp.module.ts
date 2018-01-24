import {NgModule} from '@angular/core';
import {ChecktableComponent} from './checktable/checktable.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {OcpComponent} from './ocp.component';
import {OcpRoutingModule} from './ocp-routing.module';
import { OcpStartComponent } from './ocp-start/ocp-start.component';
import { OrderItemComponent } from './checktable/order-item/order-item.component';
import { OrderDetailComponent } from './checktable/order-detail/order-detail.component';
import { OrderEditComponent } from './checktable/order-detail/order-edit/order-edit.component';

@NgModule({
  declarations: [
    OcpComponent,
    ChecktableComponent,
    OcpStartComponent,
    OrderItemComponent,
    OrderDetailComponent,
    OrderEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OcpRoutingModule
  ]
})
export class OcpModule {}
