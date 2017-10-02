import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { EmployeComponent } from './employe/employe.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeTitlePipePipe } from './employee-title-pipe.pipe';
import { EmployeCountComponent } from './employe-count/employe-count.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  { path:'employees', component:EmployeeListComponent},
  {path:'employees/code', component:EmployeComponent},
  {path:'about', component:AboutComponent},
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'**', component:NotfoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeComponent,
    EmployeeListComponent,
    EmployeeTitlePipePipe,
    EmployeCountComponent,
    HomeComponent,
    NotfoundComponent,
    AboutComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes,{useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
