import { Injectable } from '@angular/core';
import { Professor } from 'models/*';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfessorService {

    private professorsUrl = 'api/professors' // URL to web api

    constructor(private http: HttpClient) { }

    /** GET professors from the server */
    getProfessors(): Observable<Professor[]> {
        return this.http.get<Professor[]>(this.professorsUrl)
    }

}