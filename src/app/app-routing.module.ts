import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LoginComponent } from './components/login/login.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { GiftComponent } from './components/gift/gift.component';
import { ProductComponent } from './components/product/product.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { VaseComponent } from './components/vase/vase.component';
import { BoquetsComponent } from './components/boquets/boquets.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',title:'Flower Shop', component:HomeComponent,
      children:[
        {path:'product',title:'Flower' , component:ProductComponent},
        {path:'gift',title:'Gifts',component:GiftComponent},
        {path:'vase',title:'Vases',component:VaseComponent},
        {path:'boquet',title:'Boquets',component:BoquetsComponent}
      ]},
  {path:'about',title:'Flower Shop', component:AboutComponent},
  {path:'login',title:'Login', component:LoginComponent,
      children:[
        {path:'signUp',title:'Sign Up',component:SignUpComponent}
      ]},
  {path:'categories',title:'Categories', component:CategoriesComponent},
  {path:'contacts',title:'Contacts', component:ContactsComponent},
  {path:'cart',title:'Shopping Cart', component:CartComponent},
  {path:'**',title:'Not Found',component:NotfoundComponent}
  // {path:'signUp', component:SignUpComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
