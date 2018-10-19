import { Component, OnInit } from '@angular/core';
import { ProfessorService } from './professor.service';
import { Observable } from 'rxjs';
import { Professor } from 'models/*';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  professors: Observable<Professor[]>;

  constructor(
    private service: ProfessorService
  ) { }

  ngOnInit() {
    this.professors = this.service.getProfessors();
  }

}
