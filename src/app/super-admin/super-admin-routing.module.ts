import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AuthGuard } from "@app/_helper/auth.guard";
import { SuperAdminGuard } from "@app/_helper/super-admin.guard";
import { CreateEaComponent } from './pages/create-ea/create-ea.component';

const routes: Routes = [
  {
    path: 'super-admin', 
    component: DashboardComponent, 
    canActivate: [AuthGuard, SuperAdminGuard]
  },
  {
    path: 'super-admin/create-election-authority',
    component: CreateEaComponent,
    canActivate: [AuthGuard, SuperAdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
