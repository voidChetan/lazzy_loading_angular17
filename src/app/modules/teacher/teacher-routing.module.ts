import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { NewTeacherComponent } from './new-teacher/new-teacher.component';

const routes: Routes = [
  {
    path:'list',
    component:TeacherListComponent
  },
  {
    path:'new-teacher',
    component:NewTeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
