import { Injectable  } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import {  ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService  {

  constructor(private authservice:AuthServiceService,private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {
    if(this.authservice.isLoggedIn)
    {
      return true
    }
    else
    {
      this.router.navigateByUrl("")
      return false
    }
    

  }
  
 
}
