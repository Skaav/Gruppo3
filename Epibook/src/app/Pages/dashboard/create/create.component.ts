import { IPost } from 'src/app/Models/dashboard/ipost';
import { DashboardService } from './../../../Serivices/dashboard.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

newPost:IPost = {
  userId: '',
  body: '',
  cetegory: '',
  likes: [],
  comments: []
}

constructor(private dashSvc:DashboardService, private router:Router){}

create(){
  this.dashSvc.create(this.newPost).subscribe(data =>{
    this.router.navigate(['/dashboard'])
  })
}

}
