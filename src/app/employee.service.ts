import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeService {

  /* constructor(private _http: Http){}

  getEmployees(): Observable<IEmployee[]>{
     return this._http.get("")
       .map((response: Response)=> <IEmployee[]>response.json())
  }*/
  /* getEmployees(){
     return[
       { code: 'em101', name: 'Tom', gender:'male'},
       { code: 'em102', name: 'Alex', gender:'male'},
       { code: 'em103', name: 'Thom', gender:'female'},
       { code: 'em104', name: 'hom', gender:'male'}
     ]
   }
*/

}
