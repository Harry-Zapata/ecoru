import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ FooterComponent,
    NavbarComponent,HeaderComponent],
  imports: [
    CommonModule, FormsModule, RouterModule
  ], exports :[ FooterComponent, NavbarComponent, HeaderComponent]
})
export class CoreModule { }
