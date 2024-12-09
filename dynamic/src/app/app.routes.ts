import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', // Home page set as default (' ')
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  }, 
  { 
    path: 'home', // Home page set as default (' ')
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  }, 
  {
    path: 'cart', // Cart page ('cart')
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) 
  } 
];
