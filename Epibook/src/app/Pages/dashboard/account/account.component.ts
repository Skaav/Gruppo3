import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/Models/auth/iuser';
import { IPost } from 'src/app/Models/dashboard/ipost';
import { DashboardService } from 'src/app/Serivices/dashboard.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

leftUsersArr:IUser[]= [];
usersArr:IUser[]= [];

choosedUser:IUser = {
  username: '',
  email: '',
  profilePic: '',
  description: '',
  followerArr:[],
  followArr:[]
}
generalPostsArr:IPost[] = [];
profilePosts:IPost[] = [];

constructor(private dashSvc:DashboardService,
            private router: Router,
            private route:ActivatedRoute
            ){}

ngOnInit() {
    this.route.params
    .subscribe((params:any)=>{
      this.dashSvc.getAllUsers().subscribe( (data) => {
        this.usersArr = Object.values(data)
        this.leftUsersArr = Object.values(data)

        this.usersArr = this.usersArr.filter( (user) => user.username == params.id)
        this.choosedUser = this.usersArr[0]

        this.getUserPosts()
      })
    })

}

getUserPosts() {
  this.dashSvc.getAll().subscribe((data) => {
    this.generalPostsArr = Object.values(data);
    this.profilePosts = this.generalPostsArr.filter((p) => p.author == this.choosedUser.username);
  });
}


}
