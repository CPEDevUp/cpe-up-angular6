import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [BreadcrumbComponent],
  exports: [
    // Component
    BreadcrumbComponent,
    // Modules
    CommonModule,
    RouterModule
]
})
export class BreadcrumbModule { }
