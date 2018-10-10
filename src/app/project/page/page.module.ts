import { NgModule } from '@angular/core';
import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BreadcrumbModule } from './components/breadcrumb/breadcrumb.module';

@NgModule({
    imports: [
        CommonModule,
        PageRoutingModule,
        BreadcrumbModule
    ],
    declarations: [
        PageComponent,
        MenuComponent,
        HomeComponent
    ]
})
export class PageModule { }
