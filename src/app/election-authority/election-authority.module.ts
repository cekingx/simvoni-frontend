import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectionAuthorityRoutingModule } from './election-authority-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from "../shared/shared.module";
import { AsideBrandComponent } from './aside-brand/aside-brand.component';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { AsideComponent } from './aside/aside.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ElectionComponent } from './pages/election/election.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AsideComponent,
    HeaderComponent,
    SubHeaderComponent,
    AsideBrandComponent,
    HeaderMobileComponent,
    BreadcrumbsComponent,
    ElectionComponent
  ],
  imports: [
    CommonModule,
    ElectionAuthorityRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ]
})
export class ElectionAuthorityModule { }
