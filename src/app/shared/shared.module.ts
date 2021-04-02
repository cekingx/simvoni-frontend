import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout/logout.component';
import { DisplayDateComponent } from './display-date/display-date.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    LogoutComponent, 
    DisplayDateComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoutComponent,
    DisplayDateComponent,
    FooterComponent
  ]
})
export class SharedModule { }
