import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectionAuthorityRoutingModule } from './election-authority-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ElectionAuthorityRoutingModule,
    SharedModule
  ]
})
export class ElectionAuthorityModule { }
