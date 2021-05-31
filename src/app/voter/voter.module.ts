import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoterRoutingModule } from './voter-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from "../shared/shared.module";
import { AsideComponent } from './aside/aside.component';
import { AsideBrandComponent } from './aside-brand/aside-brand.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';


@NgModule({
  declarations: [
    AsideComponent,
    AsideBrandComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    HeaderMobileComponent,
    SubHeaderComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    VoterRoutingModule,
    SharedModule
  ]
})
export class VoterModule { }
