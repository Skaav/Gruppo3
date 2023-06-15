import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPost } from '../Models/dashboard/ipost';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  postApi:string = environment.postsApi

  constructor(private http:HttpClient) { }

  create(post:IPost){
    return this.http.post(this.postApi, post)
  }

  getAll() {
    return this.http.get(this.postApi);
  }
}
