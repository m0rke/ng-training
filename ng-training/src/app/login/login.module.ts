import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginpageComponent } from './loginpage.component';
import { AppRoutesModule } from '../app-routes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginpageComponent],
  imports: [
    CommonModule,
    AppRoutesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginpageComponent
  ]
})
export class LoginModule { }
