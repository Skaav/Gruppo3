import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../Models/auth/ilogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  apiRegister:string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`
  apiLogin:string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`

  constructor(
    private http:HttpClient,
    ) { }
  register(user: ILogin) {
    return this.http.post(this.apiRegister, {...user, returnSecuretoken: true})
   }

  login(user: ILogin) {
    return this.http.post(this.apiLogin, {...user, returnSecuretoken: true})
  }
}
