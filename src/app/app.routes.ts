import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OrderComponent } from './components/order/order.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { DetailsComponent } from './components/details/details.component';
import { authGuard } from '../guards/auth.guard';
import { AddProductComponent } from './components/add-product/add-product.component';

export const routes: Routes = [
  //first match wins strategy
  // {path:'',component:HomeComponent}, /home
  {
    path: '',
    component: MainLayoutComponent,

    children: [
        { path: '', component: HomeComponent, title: 'Home page' },
      { path: 'home', component: HomeComponent, title: 'Home page' },
      { path: 'about', component: AboutUsComponent, title: 'About page' },
      { path: 'products', canActivate:[authGuard], component: OrderComponent, title: 'Products page' },
      {path:'add',component:AddProductComponent,title:"Add Product Page"},
      {path:'details/:id',component:DetailsComponent}
    ],
  },
  // {path:'',redirectTo:'home',pathMatch:'full'},

  { path: 'login', component: LoginComponent, title: 'Login page' },
  //wild card route
  { path: '**', component: NotFoundComponent },
];
