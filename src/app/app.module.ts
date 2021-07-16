import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { FilterPipe } from './filter-file';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { Routes , RouterModule} from '@angular/router';
const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'employee-add', component: EmployeeAddComponent },
];

@NgModule({


  declarations: [
    AppComponent,
    EmployeeComponent,
    FilterPipe,
    EmployeeAddComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
