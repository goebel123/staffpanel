import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {AuthModule} from './auth/auth.module';
import {AuthService} from './auth/auth.service';
import {OcpModule} from './ocp/ocp.module';
import {OrdersService} from './ocp/orders.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    OcpModule
  ],
  providers: [AuthService, OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
