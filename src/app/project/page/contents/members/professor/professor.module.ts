import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfessorComponent } from './professor.component';
import { ProfessorService } from './professor.service';

const routes: Routes = [
  { path: 'psf0000', component: ProfessorComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [ProfessorComponent],
  providers: [ProfessorService]
})
export class ProfessorModule { }
