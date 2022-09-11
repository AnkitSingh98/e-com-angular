import { Component, OnInit } from '@angular/core';
import { AuthHelperService } from 'src/app/services/auth-helper.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {


  isLogin = false
  user: any = {}

  constructor( private authHelper: AuthHelperService ) {  }

  ngOnInit(): void {

    
    this.isLogin = this.authHelper.checkLogin()
    this.user = this.isLogin ? this.authHelper.getCurrentUser() : null

    console.log("isLogin from dashboard = " + this.isLogin)

  }


  logoutUser(){

    this.authHelper.logout()
    this.isLogin=false
    this.user=null
  }

}
