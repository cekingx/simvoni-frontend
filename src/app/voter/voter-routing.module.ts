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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoterRoutingModule { }
