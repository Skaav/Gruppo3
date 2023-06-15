import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Models/auth/iuser';
import { UserService } from 'src/app/Serivices/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  editZone: boolean = false;

  currentId: string = '';

  currentUser: IUser = {
    username: '',
    email: '',
    profilePic: '',
    description: '',
    followerArr: [],
    followArr: [],
  };

  constructor(private userSvc: UserService) {}

  ngOnInit() {
    this.userSvc.giveCurrentUser();
    this.getCurrentUser();
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
}
