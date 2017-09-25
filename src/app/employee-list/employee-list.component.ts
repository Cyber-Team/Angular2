import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employe: any[] = [
    { code: 'em101', name: 'Tom', gender:'Male'},
   { code: 'em102', name: 'Alex', gender:'Male'},
    { code: 'em103', name: 'Thom', gender:'female'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
