import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthHelperService } from 'src/app/services/auth-helper.service';

@Component({
  selector: 'app-custom-navbar',
  templateUrl: './custom-navbar.component.html',
  styleUrls: ['./custom-navbar.component.css']
})
export class CustomNavbarComponent implements OnInit {


  isLogin = false;
  user:any = null;


  constructor(private authHelper: AuthHelperService, private router: Router) { }

  ngOnInit(): void {

    this.isLogin = this.authHelper.checkLogin()
      this.user = this.isLogin ? this.authHelper.getCurrentUser():null
    console.log("isLogin from ngOnInit = " + this.isLogin)

    this.authHelper.loginLogoutEmitter.subscribe(
      value=> {

        this.isLogin = this.authHelper.checkLogin()
        this.user = this.isLogin ? this.authHelper.getCurrentUser():null

        console.log("Value from emitter= " + value)
        console.log("isLogin from emitter = " + this.isLogin)

      }
    )
 
  }


  logoutUser(){
    this.authHelper.logout()
    
  }

}
