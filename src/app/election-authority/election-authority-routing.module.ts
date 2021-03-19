import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AuthGuard } from "@app/_helper/auth.guard";
import { ElectionAuthorityGuard } from "@app/_helper/election-authority.guard";

const routes: Routes = [
  {
    path: 'election-authority', 
    component: DashboardComponent,
    canActivate: [AuthGuard, ElectionAuthorityGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectionAuthorityRoutingModule { }
