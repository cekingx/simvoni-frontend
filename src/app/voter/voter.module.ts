import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoterRoutingModule } from './voter-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    VoterRoutingModule,
    SharedModule
  ]
})
export class VoterModule { }
