import { Component, OnInit } from '@angular/core';
//import {EmployeeService } from './employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employe: any[];

  //selectedEmployeCount: string = 'All';
  constructor() {
    this.employe = [
      { code: 'em101', name: 'Tom', gender:'Male'},
      { code: 'em102', name: 'Alex', gender:'Male'},
      { code: 'em103', name: 'Thom', gender:'female'},
      { code: 'em104', name: 'hom', gender:'male'}

    ];
  }
  /*getEmploye() : void{
    this.employe = [
      { code: 'em101', name: 'Tom', gender:'Male'},
      { code: 'em102', name: 'Alex', gender:'Male'},
      { code: 'em103', name: 'Thom', gender:'female'},
      { code: 'em104', name: 'hom', gender:'male'}

    ];
  }*/
  /*trackByEmpCode(index:number, employe: any): string{
    return employe.code;
  }*/

  getTotalEmployeCount(): number{
    return this.employe.length;
  }

  TotalNumberOfMale(): number{
    return this.employe.filter(e => e.gender === "male").length;
  }
  TotalNumberOfFeMale(): number{
    return this.employe.filter(e => e.gender === "female").length;
  }


  ngOnInit() {
  }

}
