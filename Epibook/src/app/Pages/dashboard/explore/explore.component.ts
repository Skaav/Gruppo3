import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Models/auth/iuser';
import { DashboardService } from 'src/app/Serivices/dashboard.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit{

  usersArr: IUser[] = [];

  constructor(private dashSvc: DashboardService){}

  ngOnInit() {
    this.dashSvc.getAllUsers().subscribe((data) => {
      this.usersArr = Object.values(data);
    })
  }


}
