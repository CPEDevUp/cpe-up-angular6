import { NgModule } from '@angular/core';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        CommonModule,
        PageRoutingModule
    ],
    declarations: [
        BreadcrumbComponent,
        PageComponent,
        MenuComponent,
        HomeComponent
    ]
})
export class PageModule { }
