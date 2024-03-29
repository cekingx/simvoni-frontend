import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from "../shared/shared.module";
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { CreateEaComponent } from './pages/create-ea/create-ea.component';
import { AsideBrandComponent } from './aside-brand/aside-brand.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { ShowEaComponent } from './pages/show-ea/show-ea.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ShowAllEaComponent } from './pages/show-all-ea/show-all-ea.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ElectionAuthorityService } from './services/election-authority.service';
import { ShowRtdElectionComponent } from './pages/show-rtd-election/show-rtd-election.component';
import { ElectionService } from './services/election.service';
import { UpgradeRoleComponent } from './pages/upgrade-role/upgrade-role.component';
import { UserService } from '@app/voter/services/user.service';

@NgModule({
  declarations: [
    DashboardComponent,
    AsideComponent,
    HeaderComponent,
    SubHeaderComponent,
    CreateEaComponent,
    AsideBrandComponent,
    HeaderMobileComponent,
    ShowEaComponent,
    ShowAllEaComponent,
    BreadcrumbsComponent,
    ShowRtdElectionComponent,
    UpgradeRoleComponent
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
  providers: [
    ElectionAuthorityService,
    ElectionService,
    UserService
  ]
})
export class SuperAdminModule { }
