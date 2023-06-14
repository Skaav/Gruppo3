import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Models/auth/iuser';
import { UserService } from 'src/app/Serivices/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser:IUser = {
    username: '',
    email: '',
    profilePic: '',
    description: '',
    followerArr:[],
    followArr:[]
  }


  constructor(private userSvc:UserService){}

  ngOnInit() {
    this.getCurrentUser()
  }

  getCurrentUser() {
    this.userSvc.giveCurrentUser()
    this.userSvc.getCurrent().subscribe((data) => {
      const userData = data as IUser
      this.currentUser = userData
    })
  }



}
