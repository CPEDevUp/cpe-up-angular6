import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { St1000Component } from './st1000/st1000.component';

const routes: Routes = [
  { path: 'st1000', component: St1000Component },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations: [St1000Component]
})
export class StudentModule { }
