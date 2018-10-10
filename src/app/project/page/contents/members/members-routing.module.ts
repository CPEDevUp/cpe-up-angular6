import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: 'student', loadChildren: './student/student.module#StudentModule' },
    { path: 'professor', loadChildren: './professor/professor.module#ProfessorModule' },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class MembersRoutingModule { }
