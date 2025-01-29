import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart/cart.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { LoginComponent } from './Login/login/login.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path:'login',
        component:LoginComponent,
      },
      {
        path:'Products',
        component:ProductListComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
];
