import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailComponent } from './detail/detail.component';
import { AccountComponent } from './account/account.component';
import { NavbarComponent } from 'src/app/Components/navbar/navbar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    DetailComponent,
    AccountComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
