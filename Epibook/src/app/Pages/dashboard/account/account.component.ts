import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/Models/auth/iuser';
import { IPost } from 'src/app/Models/dashboard/ipost';
import { DashboardService } from 'src/app/Serivices/dashboard.service';
import { UserService } from 'src/app/Serivices/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  leftUsersArr: IUser[] = [];
  usersArr: IUser[] = [];

  choosedUser: IUser = {
    username: '',
    email: '',
    profilePic: '',
    description: '',
    followerArr: [],
    followArr: [],
  };
  currentUser: IUser = {
    username: '',
    email: '',
    profilePic: '',
    description: '',
    followerArr: [],
    followArr: [],
  };
  generalPostsArr: IPost[] = [];
  profilePosts: IPost[] = [];
  currentId: string = '';
  choosedKeys: string[] = [];
  choosedId: string = '';

  constructor(
    private dashSvc: DashboardService,
    private router: Router,
    private route: ActivatedRoute,
    private userSvc: UserService
  ) {}

  ngOnInit() {
    this.reload();
  }

  getUserPosts() {
    this.dashSvc.getAll().subscribe((data) => {
      this.generalPostsArr = Object.values(data);
      this.profilePosts = this.generalPostsArr.filter(
        (p) => p.author == this.choosedUser.username
      );
    });
  }

  getCurrentUser() {
    this.userSvc.getCurrent().subscribe((data) => {
      const res = Object.values(data)[0];
      const id = Object.keys(data)[0];

      this.currentUser = res;
      this.currentId = id;
    });
  }

  follow() {
    const index = this.choosedUser.followerArr.indexOf(this.currentId);
    const followIndex = this.currentUser.followArr.indexOf(this.choosedId);
    if (index > -1) {
      this.choosedUser.followerArr.splice(index, 1);
      this.currentUser.followArr.splice(followIndex, 1);
      this.dashSvc
        .follow(this.choosedUser, this.choosedId)
        .subscribe((data) => this.reload);
      this.dashSvc
        .follow(this.currentUser, this.currentId)
        .subscribe((data) => {});
    } else {
      this.choosedUser.followerArr.push(this.currentId);
      this.currentUser.followArr.push(this.choosedId);
      this.dashSvc
        .follow(this.choosedUser, this.choosedId)
        .subscribe((data) => this.reload);
      this.dashSvc
        .follow(this.currentUser, this.currentId)
        .subscribe((data) => {});
    }
  }

  reload() {
    this.route.params.subscribe((params: any) => {
      this.dashSvc.getAllUsers().subscribe((data) => {
        this.usersArr = Object.values(data);
        this.choosedKeys = Object.keys(data);
        this.leftUsersArr = Object.values(data);
        this.userSvc.giveCurrentUser();
        this.getCurrentUser();
        this.usersArr = this.usersArr.filter(
          (user) => user.username == params.id
        );
        this.choosedUser = this.usersArr[0];
        const indexUser = this.usersArr.findIndex(
          (user) => user == this.choosedUser
        );
        const key = this.choosedKeys.slice(indexUser, indexUser + 1);
        this.choosedId = key[0];

        this.getUserPosts();
      });
    });
  }
}
