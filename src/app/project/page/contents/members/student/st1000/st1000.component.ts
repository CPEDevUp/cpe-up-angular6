import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'models/';
import { St1000Service } from './st1000.service';
declare var $: any;
@Component({
  selector: 'app-st1000',
  templateUrl: './st1000.component.html',
  styleUrls: ['./st1000.component.css'],
  providers: [St1000Service]
})
export class St1000Component implements OnInit {

  students: Observable<Student[]>;

  constructor(
    private service: St1000Service
  ) { }

  ngOnInit() {
    this.students = this.service.getStudents();
  }

  sideBar() {
    $('.ui.sidebar').sidebar({
      context: '.ui.grid.pushable'
    })
      .sidebar('setting', 'transition', 'push')
      .sidebar('toggle');
  }


}
