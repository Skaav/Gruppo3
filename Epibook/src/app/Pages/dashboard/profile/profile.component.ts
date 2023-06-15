import { DashboardService } from './../../../Serivices/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Models/auth/iuser';
import { IPost } from 'src/app/Models/dashboard/ipost';
import { UserService } from 'src/app/Serivices/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  editZone: boolean = false;

  currentId: string = '';
  generalPostsArr: IPost[] = [];
  profilePosts: IPost[] = [];

  currentUser: IUser = {
    username: '',
    email: '',
    profilePic: '',
    description: '',
    followerArr: [],
    followArr: [],
  };


  constructor(
    private userSvc: UserService,
    private dashSvc: DashboardService
  ) {}

  ngOnInit() {
    this.userSvc.giveCurrentUser();
    this.getCurrentUser();
    this.getProfilePosts();
  }

  getCurrentUser() {
    this.userSvc.getCurrent().subscribe((data) => {
      const res = Object.values(data)[0];
      const id = Object.keys(data)[0];

      this.currentUser = res;
      this.currentId = id;
    });
  }

  edit() {
    this.userSvc
      .editUser(this.currentUser, this.currentId)
      .subscribe((data) => {
        this.getCurrentUser();
        this.editZone = false;
      });
  }

  getProfilePosts() {
    this.dashSvc.getAll().subscribe((data) => {
      this.generalPostsArr = Object.values(data);
      console.log(this.generalPostsArr);
      this.profilePosts = this.generalPostsArr.filter(
        (p) => p.author == this.currentUser.username
      );
    });
  }
}
