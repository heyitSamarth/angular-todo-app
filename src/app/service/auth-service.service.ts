import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isLoggedIn:Boolean = false

  login(){
    this.isLoggedIn=true
  }
  logout(){
    this.isLoggedIn=false
  }

  isAuthenticated(){
    return this.isLoggedIn
  }

  constructor() { }
}
