import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AuthGuard } from "@app/_helper/auth.guard";
import { VoterGuard } from "@app/_helper/voter.guard";
import { AvailableElectionComponent } from './pages/available-election/available-election.component';
import { FollowedElectionComponent } from './pages/followed-election/followed-election.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard, VoterGuard]
  },
  {
    path: 'available-election',
    component: AvailableElectionComponent,
    canActivate: [AuthGuard, VoterGuard]
  },
  {
    path: 'followed-election',
    component: FollowedElectionComponent,
    canActivate: [AuthGuard, VoterGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoterRoutingModule { }
