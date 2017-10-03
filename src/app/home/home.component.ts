import { Component, OnInit } from '@angular/core';
import { UserprefrenceService } from '../userprefrence.service';

@Component({

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //using dependency injection
  // private _UserprefrenceService: UserprefrenceService;
  constructor( private _UserprefrenceService: UserprefrenceService) {
      //this._UserprefrenceService = new UserprefrenceService();
  }
  get colour():string{
    return this._UserprefrenceService.colorPrefrence;
  }
  set colour(value:string){
    this._UserprefrenceService.colorPrefrence = value;
  }

  ngOnInit() {
  }

}
