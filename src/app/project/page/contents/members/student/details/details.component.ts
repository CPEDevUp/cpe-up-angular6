import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentDetailsService } from './details.service';
import { Student, initialStudent } from 'models/*';
import { Location } from '@angular/common';

@Component({
    selector: 'student-details',
    templateUrl: 'details.component.html',
    styles: ['./details.component.css'],
    providers: [StudentDetailsService]
})

export class StudentDetailsComponent implements OnInit {

    id: number
    student: Student
    loading: boolean

    constructor(
        private route: ActivatedRoute,
        private service: StudentDetailsService,
        private _location: Location
    ) {
        this.student = initialStudent
    }

    ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id')
        if (this.id) {
            this.loading = true
            this.service.getStudent(this.id).subscribe(student => {
                this.student = student
                this.loading = false
            });
        }
    }

    back() {
        this._location.back();
    }

}