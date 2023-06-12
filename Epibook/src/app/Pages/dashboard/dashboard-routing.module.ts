import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'detal/:id', component: DetailComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'account/:id', component: AccountComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
