import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employe: any[];


  constructor() {
    this.employe = [
    { code: 'em101', name: 'Tom', gender:'Male'},
    { code: 'em102', name: 'Alex', gender:'Male'},
    { code: 'em103', name: 'Thom', gender:'female'}
  ];
  }
  getEmploye() : void{
    this.employe = [
      { code: 'em101', name: 'Tom', gender:'Male'},
      { code: 'em102', name: 'Alex', gender:'Male'},
      { code: 'em103', name: 'Thom', gender:'female'},
      { code: 'em104', name: 'hom', gender:'male'}

    ];
  }
  trackByEmpCode(index:number, employe: any): string{
    return employe.code;
  }

  ngOnInit() {
  }

}
