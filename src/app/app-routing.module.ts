import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TooltipModule} from 'ngx-bootstrap';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {HomePageComponent} from './home-page/home-page.component';
import {CourierPageComponent} from './courier-page/courier-page.component';
import {FoodDeliveryComponent} from './food-delivery/food-delivery.component';
import {FoodSearchComponent} from './food-search/food-search.component';
import {FoodOrderComponent} from './food-order/food-order.component';

import { from } from 'rxjs';
const routes: Routes = [
  {path:'SignIn', component: SignInComponent},
  {path:'SignUp', component: SignUpComponent},
  {path:'homepage', component: HomePageComponent},
  {path:'courierpage', component: CourierPageComponent},
  {path:'fooddelivery', component: FoodDeliveryComponent},
  {path:'foodsearch', component: FoodSearchComponent},
  {path:'foodorder', component: FoodOrderComponent},
  {path: '**', redirectTo: '/homepage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    TooltipModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
