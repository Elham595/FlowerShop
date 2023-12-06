import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './components/logout/logout.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { VaseComponent } from './components/vase/vase.component';
import { BoquetsComponent } from './components/boquets/boquets.component';
import { GiftComponent } from './components/gift/gift.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { ProductComponent } from './components/product/product.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CartComponent } from './components/cart/cart.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    LoginComponent,
    NotfoundComponent,
    NavComponent,
    FooterComponent,
    LogoutComponent,
    SignUpComponent,
    CategoriesComponent,
    VaseComponent,
    BoquetsComponent,
    GiftComponent,
    AccessoriesComponent,
    ProductComponent,
    PaymentComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
