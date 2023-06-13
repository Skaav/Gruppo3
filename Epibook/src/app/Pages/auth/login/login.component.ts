import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IAccess } from 'src/app/Models/auth/iaccess';
import { ILogin } from 'src/app/Models/auth/ilogin';
import { AuthService } from 'src/app/Serivices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: ILogin = {
    email: '',
    password: ''
  }
  that:IAccess ={
    accessToken: '',
  }

  constructor(
    private authSvc:AuthService,
    private router:Router
  ){}

  login(){
    this.authSvc.login(this.user).subscribe(data => {
      console.log(data)
      this.router.navigate(['/dashboard']);
    })
  }
}
