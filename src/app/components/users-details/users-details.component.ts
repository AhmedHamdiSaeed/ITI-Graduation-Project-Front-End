import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styles: [
  ]
})
export class UsersDetailsComponent implements OnInit{
  id=0;
  user:any
constructor(private myRoute:ActivatedRoute,private myService:DemoService)
{
  this.id=myRoute.snapshot.params["id"];
}
ngOnInit():void
{
this.myService.getUserById(this.id).subscribe({
  next:(data)=>{this.user=data},
  error:(err)=>{console.log(err)}
})
}
}
