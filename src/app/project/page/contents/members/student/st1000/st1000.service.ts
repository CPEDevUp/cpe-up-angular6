import { Injectable } from '@angular/core'
import { Student } from 'models/*'
import { Observable } from 'rxjs'

import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()
export class St1000Service {

    private studentsUrl = 'api/students'  // URL to web api

    constructor(private http: HttpClient) { }

    /** GET students from the server */
    getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(this.studentsUrl)
    }

}