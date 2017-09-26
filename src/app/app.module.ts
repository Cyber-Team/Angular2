import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeComponent } from './employe/employe.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeTitlePipePipe } from './employee-title-pipe.pipe';
import { EmployeCountComponent } from './employe-count/employe-count.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeComponent,
    EmployeeListComponent,
    EmployeeTitlePipePipe,
    EmployeCountComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
