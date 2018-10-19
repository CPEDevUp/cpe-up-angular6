import { Injectable } from '@angular/core';
import { Student } from 'models/*';
import { Observable } from 'rxjs';

@Injectable()
export class St1000Service {

    private students: Student[];

    constructor() {
        this.students = [
            // { studentId: "57024255", name: "นาย อาทิตย์ แก่นใจ", position: "นิสิต", description: "-" },
        ];
        for (let i = 0; i < 100; i++) {
            this.students.push(
                { studentId: "570XXXXX", name: "XXXXXX XXXXX", position: "นิสิต", description: "-" });
        }
    }

    public getStudents(): Observable<Student[]> {
        return new Observable(obs => {
            obs.next(this.students);
            obs.complete();
        });
    }
}