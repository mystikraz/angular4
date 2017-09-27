import { Student } from "../models/student";

export interface IStudentService {
    getAll():Array<Student>;
    insert(student:Student):void;
}

export class StudentService implements IStudentService{
    private studentList:Array<Student>=new Array<Student>();
    
    getAll(): Array<Student>{
    return this.studentList;
    }
    insert(student: Student): void {
    this.studentList.push(student);
    }
        
}