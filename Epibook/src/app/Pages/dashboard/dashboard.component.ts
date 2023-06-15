import { Component } from '@angular/core';
import { NavbarComponent } from 'src/app/Components/navbar/navbar.component';
import { IPost } from 'src/app/Models/dashboard/ipost';
import { DashboardService } from 'src/app/Serivices/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  postsArr: IPost[] = [];

  constructor(private dashboardSvc: DashboardService) {}

  getAll() {
    this.dashboardSvc.getAll().subscribe((data) => {
      this.postsArr = Object.values(data);
      console.log(this.postsArr);
    });
  }

  ngOnInit() {
    this.getAll();
  }
}
