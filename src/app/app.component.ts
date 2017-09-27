import { Component, OnInit } from '@angular/core';
import { Student } from "./models/student";
import { IStudentService, StudentService } from "./services/student.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  studentService:IStudentService;

  title = 'app';
  students=[];

  ngOnInit(): void {
    this.studentService=new StudentService();
  let s:Student=new Student();
    s.setFirstname("Kishor");
    s.setlastName("Shahi");
    // this.students.push(s);
    this.studentService.insert(s);

    s=new Student();
    s.setFirstname("Sanku");
    s.setlastName("Bhattarai");
    this.studentService.insert(s);
    this.students=this.studentService.getAll();
  }
}
