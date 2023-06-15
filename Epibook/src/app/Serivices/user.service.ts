import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersApi:string = environment.usersApi
  currentEmail:string = ''

  constructor(private http:HttpClient) { }

  giveCurrentUser() {
    const userDataLocal = localStorage.getItem('user')
    if (userDataLocal) {

      const userData = JSON.parse(userDataLocal);

      this.currentEmail = userData.email;
  }
  }
  getCurrent(){
    return this.http.get(this.usersApi, {
      params: new HttpParams()
        .set('orderBy', '"email"')
        .set('equalTo', `"${this.currentEmail}"`)
    })
  }
}
