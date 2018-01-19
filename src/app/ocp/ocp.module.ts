import {NgModule} from '@angular/core';
import {ChecktableComponent} from './checktable/checktable.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {OcpComponent} from './ocp.component';
import {OcpRoutingModule} from './ocp-routing.module';
import { OcpStartComponent } from './ocp-start/ocp-start.component';
import { OrderItemComponent } from './checktable/order-item/order-item.component';

@NgModule({
  declarations: [
    OcpComponent,
    ChecktableComponent,
    OcpStartComponent,
    OrderItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OcpRoutingModule
  ]
})
export class OcpModule {}
