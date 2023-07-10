import { Component } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ],
  providers:[DemoService]

})
export class AddComponent {
  constructor(private myService:DemoService){
  }
  add(name:any,age:any,email:any,phone:any)
  {
      let newUser={name,age,email,phone}
      this.myService.AddUser(newUser).subscribe();
  }

}
