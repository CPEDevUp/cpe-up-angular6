import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfessorComponent } from './professor.component';

const routes: Routes = [
  { path: 'psf0000', component: ProfessorComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [ProfessorComponent]
})
export class ProfessorModule { }
