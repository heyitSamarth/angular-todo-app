import { Component } from '@angular/core';
import { AuthServiceService } from './service/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth :AuthServiceService){

  }
  
  

  title = 'todo-app';
  islogged=this.auth.isLoggedIn
}
