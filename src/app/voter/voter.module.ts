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
import { AvailableElectionComponent } from './pages/available-election/available-election.component';
import { FollowedElectionComponent } from './pages/followed-election/followed-election.component';


@NgModule({
  declarations: [
    AsideComponent,
    AsideBrandComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    HeaderMobileComponent,
    SubHeaderComponent,
    DashboardComponent,
    AvailableElectionComponent,
    FollowedElectionComponent
  ],
  imports: [
    CommonModule,
    VoterRoutingModule,
    SharedModule
  ]
})
export class VoterModule { }
