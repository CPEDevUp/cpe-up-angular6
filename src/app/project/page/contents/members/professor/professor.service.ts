import { Injectable } from '@angular/core';
import { Professor } from 'models/*';
import { Observable } from 'rxjs';

@Injectable()
export class ProfessorService {

    private professors: Professor[];

    constructor() {
        this.professors = [
            // { professorId: "12XXXXX", position: "อาจารย์", name: "ดร.XXXXX XXXXXX", subjects: "C Programming, Data Structure", description: "-" }
        ];
        for (let i = 0; i < 10; i++) {
            this.professors.push(
                { professorId: "12XXXXX", position: "อาจารย์", name: "ดร.XXXXX XXXXXX", subjects: "C Programming, Data Structure", description: "-" });
        }
    }

    public getProfessors(): Observable<Professor[]> {
        return new Observable(obs => {
            obs.next(this.professors);
            obs.complete();
        });
    }
}