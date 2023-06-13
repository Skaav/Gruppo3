import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { IRegister } from '../Models/auth/iregister';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ILogin } from '../Models/auth/ilogin';
import { IAccess } from '../Models/auth/iaccess';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  apiRegister:string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`
  apiLogin:string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`

  constructor(
    private http:HttpClient,
    private router:Router
    ) { }
  // isLoggedIn(): Observable<boolean> {
  //     return this.afAuth.authState.pipe(
  //       map(user => !!user) // Restituisce true se l'utente è autenticato, altrimenti false
  //     );}
  register(user: IRegister) {
    return this.http.post(this.apiRegister, {...user, returnSecuretoken: true})
   }

  login(user: ILogin) {
    return this.http.post(this.apiLogin, {...user, returnSecuretoken: true})
  }
}
