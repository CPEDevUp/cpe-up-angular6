import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './project/page/home/home.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './project/page/login/login.component';

const routes: Routes = [
  { path: 'members', loadChildren: './project/page/page.module#PageModule' },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,    
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
