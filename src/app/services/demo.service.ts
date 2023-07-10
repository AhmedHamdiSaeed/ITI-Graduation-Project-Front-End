import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private myClient:HttpClient) { }
  private readonly Base_URL="http://localhost:3000/users"
  getAllUsers()
  {
    return this.myClient.get(this.Base_URL);
  }
  getUserById(id:any)
  {
    return this.myClient.get(this.Base_URL+"/"+id); 
  }
  AddUser(newUser:any)
  {
    return this.myClient.post(this.Base_URL,newUser)
  }
}
