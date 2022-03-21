import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AuthGuard } from "@app/_helper/auth.guard";
import { VoterGuard } from "@app/_helper/voter.guard";
import { AvailableElectionComponent } from './pages/available-election/available-election.component';
import { FollowedElectionComponent } from './pages/followed-election/followed-election.component';
import { AvailableElectionResolver } from './pages/available-election/resolver/available-election.resolver';
import { FollowedElectionResolver } from './pages/followed-election/resolver/followed-election.resolver';
import { FollowedElectionDetailComponent } from './pages/followed-election-detail/followed-election-detail.component';
import { FollowedElectionDetailResolver } from './pages/followed-election-detail/resolver/followed-election-detail.resolver';
import { EndedElectionComponent } from './pages/ended-election/ended-election.component';
import { EndedElectionResolver } from './pages/ended-election/resolver/ended-election.resolver';
import { EndedElectionDetailComponent } from './pages/ended-election-detail/ended-election-detail.component';
import { EndedElectionDetailResolver } from './pages/ended-election-detail/resolver/ended-election-detail.resolver';
import { UpgradeRoleComponent } from './pages/upgrade-role/upgrade-role.component';
import { UpgradeRoleResolver } from './pages/upgrade-role/resolver/upgrade-role.resolver';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard, VoterGuard]
  },
  {
    path: 'available-election',
    component: AvailableElectionComponent,
    canActivate: [AuthGuard, VoterGuard],
    resolve: {
      availableElection: AvailableElectionResolver
    }
  },
  {
    path: 'followed-election',
    component: FollowedElectionComponent,
    canActivate: [AuthGuard, VoterGuard],
    resolve: {
      followedElection: FollowedElectionResolver
    }
  },
  {
    path: 'followed-election/:id',
    component: FollowedElectionDetailComponent,
    canActivate: [AuthGuard, VoterGuard],
    resolve: {
      electionDetail: FollowedElectionDetailResolver
    }
  },
  {
    path: 'ended-election',
    component: EndedElectionComponent,
    canActivate: [AuthGuard, VoterGuard],
    resolve: {
      endedElection: EndedElectionResolver
    }
  },
  {
    path: 'ended-election/:id',
    component: EndedElectionDetailComponent,
    canActivate: [AuthGuard, VoterGuard],
    resolve: {
      electionDetail: EndedElectionDetailResolver
    }
  },
  {
    path: 'upgrade-role',
    component: UpgradeRoleComponent,
    canActivate: [AuthGuard, VoterGuard],
    resolve: {
      upgradeRoleStatus: UpgradeRoleResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoterRoutingModule { }
