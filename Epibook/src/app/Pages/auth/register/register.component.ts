import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/Models/auth/ilogin';
import { AuthService } from 'src/app/Serivices/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
user: ILogin = {
  email: '',
  password: ''
}


constructor(
  private authSvc:AuthService,
  private router:Router
){}


register(){
this.authSvc.register(this.user)
.subscribe(data =>{
  console.log(data);
  this.router.navigate(['/auth', 'login']);

})
}
}
