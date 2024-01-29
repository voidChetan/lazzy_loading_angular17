import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SharedModule } from '../../shared/shared/shared.module';


@NgModule({
  declarations: [
    ViewCustomerComponent,
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ]
})
export class CustomerModule { }
