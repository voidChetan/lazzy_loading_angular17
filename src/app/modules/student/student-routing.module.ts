import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { SectionsComponent } from './sections/sections.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path:'list',
    component: StudentListComponent
  },
  {
    path:'new-Student',
    component: StudentFormComponent
  }, 
  {
    path:'sections',
    component: SectionsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
