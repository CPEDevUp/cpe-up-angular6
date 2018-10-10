import { Component, OnInit, Input } from '@angular/core';
import { BreadCrumb } from './breadcrumb';

declare var $: any;

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: [
    `
    .example-btn {
      margin-top: -4px !important;
      margin-right: -4px !important;
    }
    .example {
      padding-top: 14px !important;
    }
    .sixteen.wide.column.bread {
      padding-top: 0;
    }
    .shadow {
      background-color: #fff;
      box-shadow: 2px 5px 9px rgba(0, 0, 0, 0.1);
    }
    `
  ]
})
export class BreadcrumbComponent {

  @Input() class: string;
  @Input() route: BreadCrumb[] = [];
  
  constructor() { }
  async copyBreadcrumb(e: any) {
    e.target.innerHTML = await "copied...";
    let $temp = await $("<textarea id='copyToClipboard'></textarea>");
    await $("body").append($temp);
    await $temp.val(`import { BreadCrumb } from 'models/index';\r\nbreadcrumb: BreadCrumb[] = [\r\n\t{ label: 'Page', route: '#' }\r\n]\r\n<app-breadcrumb [route]="breadcrumb"></app-breadcrumb>`).select();
    await document.execCommand("copy");
    await $temp.remove();
    setTimeout(() => e.target.innerHTML = "copied...", 200);
    setTimeout(() => e.target.innerHTML = "copied..", 400);
    setTimeout(() => e.target.innerHTML = "copied.", 800);
    setTimeout(() => e.target.innerHTML = "copy", 1000);
  }

}
