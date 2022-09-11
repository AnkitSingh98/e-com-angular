
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  base_url='http://localhost:8081'


  // Step1: Declare httpClient in Constructor
  constructor( private httpClient:HttpClient) { }

// Create new User API
createUser(userDto:any){

  //Step2: Call your service using httpClient
  return this.httpClient.post(`${this.base_url}/user`,userDto)

}


//login request API
generateToken(loginData:any){
  return  this.httpClient.post(`${this.base_url}/auth/login`,loginData)
}

}
