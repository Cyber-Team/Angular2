import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe-count',
  templateUrl: './employe-count.component.html',
  styleUrls: ['./employe-count.component.css']
})
export class EmployeCountComponent implements OnInit {

  all: number = 10;
  male: number = 5;
  female: number = 5;

  constructor() { }

  ngOnInit() {
  }

}
