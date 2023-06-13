import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Serivices/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router:Router, private authSvc:AuthService, ){}
  create(){
    // this.authSvc.createPost
  }
  logout(){
    localStorage.removeItem('user')
    console.log("Utente Sloggato")
    this.router.navigate(['/auth']);
  }
}
