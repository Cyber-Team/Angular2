import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
   getEmployees(){
     return[
       { code: 'em101', name: 'Tom', gender:'male'},
       { code: 'em102', name: 'Alex', gender:'male'},
       { code: 'em103', name: 'Thom', gender:'female'},
       { code: 'em104', name: 'hom', gender:'male'}
     ]
   }
  constructor() { }

}
