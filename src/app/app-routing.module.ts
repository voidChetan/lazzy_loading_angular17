import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'cart',
    loadChildren: ()=> import('./pages/cart/cart.module').then(m=>m.CartModule)
  },
  {
    path:'customer',
    loadChildren: () => import('./pages/customer/customer.module').then(m=>m.CustomerModule)
  },
  {
    path:'order',
    loadChildren: () => import('./pages/order/order.module').then(m=>m.OrderModule)
  },
  {
    path:'products',
    loadChildren: () => import('./pages/products/products.module').then(m=>m.ProductsModule)
  },
  {
    path:'',
    redirectTo:'customer',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
