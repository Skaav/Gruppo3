import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailComponent } from './detail/detail.component';
import { AccountComponent } from './account/account.component';
import { SearchComponent } from './search/search.component';
import { ExploreComponent } from './explore/explore.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    DetailComponent,
    AccountComponent,
    SearchComponent,
    ExploreComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
