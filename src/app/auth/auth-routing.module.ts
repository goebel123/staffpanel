import {RouterModule, Routes} from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {NgModule} from '@angular/core';

const authRoutes: Routes = [
  {path: 'signin', component: SigninComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {}
