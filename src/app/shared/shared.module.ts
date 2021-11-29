import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout/logout.component';
import { DisplayDateComponent } from './display-date/display-date.component';
import { FooterComponent } from './footer/footer.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LabelComponent } from './label/label.component';
import { ElectionStatusLabelComponent } from './election-status-label/election-status-label.component';
import { ParticipationStatusLabelComponent } from './participation-status-label/participation-status-label.component';



@NgModule({
  declarations: [
    LogoutComponent,
    DisplayDateComponent,
    FooterComponent,
    LabelComponent,
    ElectionStatusLabelComponent,
    ParticipationStatusLabelComponent
  ],
  imports: [
    CommonModule,
    SweetAlert2Module
  ],
  exports: [
    LogoutComponent,
    DisplayDateComponent,
    FooterComponent,
    LabelComponent,
    ElectionStatusLabelComponent,
    ParticipationStatusLabelComponent,
  ]
})
export class SharedModule { }
