import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TrustedBrandsComponent } from './trusted-brands/trusted-brands.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';
import { RegisterDispatcherComponent } from './register-dispatcher/register-dispatcher.component';
import { TransportComponent } from './transport/transport.component';
import { FoodCartComponent } from './food-cart/food-cart.component';
import { CourierPageComponent } from './courier-page/courier-page.component';
import { WhiteNavbarComponent } from './white-navbar/white-navbar.component';
import { FoodDeliveryComponent } from './food-delivery/food-delivery.component';
import { FoodJollofComponent } from './food-jollof/food-jollof.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { FoodSearchComponent } from './food-search/food-search.component';
import { RatingsComponent } from './ratings/ratings.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FoodOrderComponent } from './food-order/food-order.component';
import { DishCategoriesComponent } from './dish-categories/dish-categories.component';
import { FoodHeaderComponent } from './food-header/food-header.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
    TrustedBrandsComponent,
    UserReviewsComponent,
    RegisterDispatcherComponent,
    TransportComponent,
    FoodCartComponent,
    CourierPageComponent,
    WhiteNavbarComponent,
    FoodDeliveryComponent,
    FoodJollofComponent,
    HowItWorksComponent,
    FoodSearchComponent,
    RatingsComponent,
    NewsletterComponent,
    FoodOrderComponent,
    DishCategoriesComponent,
    FoodHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
