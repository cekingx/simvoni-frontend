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
import { ElectionService } from './services/election.service';
import { FollowedElectionDetailComponent } from './pages/followed-election-detail/followed-election-detail.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { EndedElectionComponent } from './pages/ended-election/ended-election.component';
import { EndedElectionDetailComponent } from './pages/ended-election-detail/ended-election-detail.component';
import { KtInitService } from '@app/services/kt-init.service';
import { UpgradeRoleComponent } from './pages/upgrade-role/upgrade-role.component';
import { UserService } from './services/user.service';


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
    FollowedElectionComponent,
    FollowedElectionDetailComponent,
    EndedElectionComponent,
    EndedElectionDetailComponent,
    UpgradeRoleComponent,
  ],
  imports: [
    CommonModule,
    VoterRoutingModule,
    SharedModule,
    SweetAlert2Module
  ],
  providers: [
    ElectionService,
    KtInitService,
    UserService
  ]
})
export class VoterModule { }
