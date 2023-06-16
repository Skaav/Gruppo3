import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/Models/auth/ilogin';
import { IUser } from 'src/app/Models/auth/iuser';
import { AuthService } from 'src/app/Serivices/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user: ILogin = {
    email: '',
    password: '',
  };

  newUser: IUser = {
    username: '@username',
    email: '',
    profilePic:
      'https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png',
    description: 'Description',
    followerArr: ['-NY1yKfsgmYX8PG1nIiO'],
    followArr: ['-NY1yKfsgmYX8PG1nIiO'],
  };

  constructor(private authSvc: AuthService, private router: Router) {}

  register() {
    this.newUser.email = this.user.email;
    this.authSvc.register(this.user).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/auth', 'login']);
    });
    this.authSvc.registerData(this.newUser).subscribe((data) => {
      console.log('Utente registrato nel Database');
    });
  }
}
