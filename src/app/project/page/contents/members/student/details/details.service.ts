import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'models/*';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StudentDetailsService {

    private studentsUrl = 'api/students'  // URL to web api

    constructor(private http: HttpClient) { }

    getStudent(id: number): Observable<Student> {
        return this.http.get<Student>(this.studentsUrl + '/' + id);
    }

}