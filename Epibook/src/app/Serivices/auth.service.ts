import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { IRegister } from '../Models/auth/iregister';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ILogin } from '../Models/auth/ilogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private authSubject = new BehaviorSubject<null | AccessData>(null)

  apiRegister:string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`
  apiLogin:string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`

  constructor(
    private http:HttpClient,
    private router:Router
    ) { }

  register(user: IRegister) {
    return this.http.post(this.apiRegister, {...user, returnSecuretoken: true})
   }

  login(user: ILogin) {
    return this.http.post(this.apiLogin, {...user, returnSecuretoken: true})
  }
}
