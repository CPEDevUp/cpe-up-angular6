import { Component, OnInit } from '@angular/core'
import { Student, initialStudent } from 'models/'
import { St1000Service } from './st1000.service'

declare var $: any

@Component({
  selector: 'app-st1000',
  templateUrl: './st1000.component.html',
  styleUrls: ['./st1000.component.css'],
  providers: [St1000Service]
})
export class St1000Component implements OnInit {

  students: Student[] = [];
  loading: boolean = true;

  constructor(
    private service: St1000Service
  ) { }

  ngOnInit() {

    // OnLoading
    this.initialStudents()

    // Loaded
    this.service.getStudents().subscribe(students => {
      this.students = students
      this.loading = false
    })
  }

  sideBar() {
    $('.ui.sidebar').sidebar({
      context: '.ui.grid.pushable'
    })
      .sidebar('setting', 'transition', 'push')
      .sidebar('toggle')
  }

  initialStudents() {
    for (let i = 0; i < 10; i++) {
      this.students.push(initialStudent)
    }
  }

}
