import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string
  password:string
  constructor(private router : Router,private auth:AuthServiceService){
    
  }

  onSubmit(){
    if(this.email=="sam@gmail.com" && this.password=="qwerty")
    {
    this.auth.isLoggedIn=true
      this.router.navigateByUrl("/home")
    }
    else
    {
      alert("INVALID CREADANTIALS")
    }
    }
  


}
