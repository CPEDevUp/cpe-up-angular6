export interface Student {
    id: number;
    studentId: string;
    position: string;
    name: string;
    description: string;
}

export const initialStudent: Student = {
    id: null,
    studentId: "",
    position: "",
    name: "",
    description: ""
}