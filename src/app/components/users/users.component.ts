import { Component } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent {
  users:any
constructor(myService:DemoService)
{
  myService.getAllUsers().subscribe(
    {
      next:(data)=>{this.users=data}, 
      error:(err)=>{console.log(err)}
    }
  )
}
}
