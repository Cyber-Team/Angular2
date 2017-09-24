import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  firstname = "krishna";
  lastname = "kondoju";

  classToApply: string = 'col-1';
  attrToApply: boolean = true;
/*
addTo(){
  let classes = {
    bold: this.attrToApply
  };
  return classes;
}*/
  constructor() { }

  ngOnInit() {
  }

}
