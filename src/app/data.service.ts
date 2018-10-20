import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student, Professor } from 'models/';

export class DataService implements InMemoryDbService {

    createDb() {
        let students: Student[] = this.addStudents(60);
        let professors: Professor[] = this.addProfessors(20);

        return { students, professors };
    }

    addStudents(num: number): Student[] {
        let students: Student[] = [];
        for (let i = 0; i < num; i++) {
            students.push(
                { id: (i + 1), studentId: "570XXXXX", name: "XXXXXX XXXXX", position: "นิสิต", description: "-" });
        }
        return students;
    }

    addProfessors(num: number): Professor[] {
        let professors: Professor[] = [];
        for (let i = 0; i < num; i++) {
            professors.push(
                { id: (i + 1), professorId: "12XXXXX", position: "อาจารย์", name: "ดร.XXXXX XXXXXX", subjects: "C Programming, Data Structure", description: "-" });
        }
        return professors;
    }

}