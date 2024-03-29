import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AuthGuard } from "@app/_helper/auth.guard";
import { SuperAdminGuard } from "@app/_helper/super-admin.guard";
import { CreateEaComponent } from './pages/create-ea/create-ea.component';
import { ShowEaComponent } from './pages/show-ea/show-ea.component';
import { ShowAllEaComponent } from './pages/show-all-ea/show-all-ea.component';
import { ElectionAuthorityResolver } from './pages/show-ea/resolver/election-authority.resolver';
import { ShowRtdElectionComponent } from './pages/show-rtd-election/show-rtd-election.component';
import { UpgradeRoleComponent } from './pages/upgrade-role/upgrade-role.component';
import { UpgradeRoleResolver } from './pages/upgrade-role/resolver/upgrade-role.resolver';

const routes: Routes = [
  {
    path: 'super-admin',
    component: DashboardComponent,
    canActivate: [AuthGuard, SuperAdminGuard]
  },
  {
    path: 'super-admin/election-authority',
    component: ShowAllEaComponent,
    canActivate: [AuthGuard, SuperAdminGuard]
  },
  {
    path: 'super-admin/election-authority/create',
    component: CreateEaComponent,
    canActivate: [AuthGuard, SuperAdminGuard]
  },
  {
    path: 'super-admin/election-authority/:id',
    component: ShowEaComponent,
    canActivate: [AuthGuard, SuperAdminGuard],
    resolve: {
      electionAuthority: ElectionAuthorityResolver
    }
  },
  {
    path: 'super-admin/election/ready-to-deploy',
    component: ShowRtdElectionComponent,
    canActivate: [AuthGuard, SuperAdminGuard]
  },
  {
    path: 'super-admin/upgrade-role',
    component: UpgradeRoleComponent,
    canActivate: [AuthGuard, SuperAdminGuard],
    resolve: {
      upgradeRoleList: UpgradeRoleResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
