export interface IEmployee {
  code: string;
  name: string;
  gender: string;
}
export class Employee implements IEmployee{
  // public code: string;
  // public name: string;
   //public gender: string;
     constructor( public code: string,public name: string, public gender: string){
     }
}
