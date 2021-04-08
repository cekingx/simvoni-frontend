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
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class SuperAdminModule { }
