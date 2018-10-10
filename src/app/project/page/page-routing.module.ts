import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: PageComponent,
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'members', loadChildren: './contents/members/members.module#MembersModule' }
  ]
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PageRoutingModule { }
