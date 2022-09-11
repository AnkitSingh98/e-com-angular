import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthHelperService } from '../services/auth-helper.service';

@Injectable({
  providedIn: 'root'
})
export class UserDashboardGuard implements CanActivate {


constructor(

  private authHelper: AuthHelperService,
  private router: Router

){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.authHelper.checkLogin()) {
        console.log("guard= true")
        return true;
      }
  else{

      this.router.navigate(["/login"],{   queryParams:{message:'You not logged in !! Login First'}})
      console.log("guard= false")
      //navigate
      return false;
      
  }
    }
  
}
