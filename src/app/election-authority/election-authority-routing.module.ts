import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AuthGuard } from "@app/_helper/auth.guard";
import { ElectionAuthorityGuard } from "@app/_helper/election-authority.guard";
import { ShowAllElectionComponent } from './pages/show-all-election/show-all-election.component';
import { CreateElectionComponent } from './pages/create-election/create-election.component';
import { ShowElectionComponent } from './pages/show-election/show-election.component';
import { ElectionResolver } from './pages/show-election/resolver/election.resolver';

const routes: Routes = [
  {
    path: 'election-authority',
    component: DashboardComponent,
    canActivate: [AuthGuard, ElectionAuthorityGuard]
  },
  {
    path: 'election-authority/election',
    component: ShowAllElectionComponent,
    canActivate: [AuthGuard, ElectionAuthorityGuard]
  },
  {
    path: 'election-authority/election/create',
    component: CreateElectionComponent,
    canActivate: [AuthGuard, ElectionAuthorityGuard]
  },
  {
    path: 'election-authority/election/:id',
    component: ShowElectionComponent,
    canActivate: [AuthGuard, ElectionAuthorityGuard],
    resolve: {
      election: ElectionResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectionAuthorityRoutingModule { }
