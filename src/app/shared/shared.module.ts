import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { MyTableComponent } from './components/my-table/my-table.component';
import { TooltipDirective } from './directive/tooltip.directive';
import { NaPipe } from './pipe/na.pipe';



@NgModule({
  declarations: [
    AlertComponent,
    MyTableComponent,
    TooltipDirective,
    NaPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent
  ]
})
export class SharedModule { }
