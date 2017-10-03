import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { UserprefrenceService } from '../userprefrence.service';
import { ActivatedRoute, Router } from "@angular/router";

//import {EmployeeService } from './employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employe: any[];
  //dependency injection
 // private _UserprefrenceService: UserprefrenceService;


  //selectedEmployeCount: string = 'All';
  constructor( private _UserprefrenceService: UserprefrenceService,
               private _activatedRoute: ActivatedRoute,
               private _route:Router) {
    //this._UserprefrenceService = new UserprefrenceService();
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
  get colour():string{
    return this._UserprefrenceService.colorPrefrence;
  }
  set colour(value:string){
    this._UserprefrenceService.colorPrefrence = value;
  }

  getTotalEmployeCount(): number{
    return this.employe.length;
  }

  TotalNumberOfMale(): number{
    return this.employe.filter(e => e.gender === "male").length;
  }
  TotalNumberOfFeMale(): number{
    return this.employe.filter(e => e.gender === "female").length;
  }
  //to back to home page
  onBackButtonClick():void{
    this._route.navigate(['/home']);
  }
  ngOnInit() {
  }

}
