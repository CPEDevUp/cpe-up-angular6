import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

const routes: Routes = [
  { path: 'student', loadChildren: './contents/menbers/student/student.module#StudentModule' },
  { path: 'professor', loadChildren: './contents/menbers/professor/professor.module#ProfessorModule' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [BreadcrumbComponent]
})
export class PageModule { }
