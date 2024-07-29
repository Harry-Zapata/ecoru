import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule, CoreModule, FormsModule, RouterModule
  ], exports: [LoginComponent, RegisterComponent
    ]
})
export class AuthModule { }
