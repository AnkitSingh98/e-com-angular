import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  

  constructor( private userService: UserService, private toast: ToastrService) { }

  ngOnInit(): void { }


  status={
    errorStatus:false,
    errorMessage:{
      name:null,
      email:null,
      password:'',
      about:'',
      phone:''
      
    }
  }




user={
  name:'',
  email:'',
  password:'',
  address:'',
  about:'',
  phone:'',
  gender:''

}

uname ="ankit"

 submitForm(event:any){

  event.preventDefault();
   


  if(this.user.name.trim() === ''){
   this.toast.error("Username is blank!!")
    return;
  }
  else if(this.user.email.trim() === ''){
    alert("email blank")
   // this.toast.error("email is blank")
   this.toast.error("email is blank")
    return;
  }
 


// Register or Create User on Form Submit

this.userService.createUser(this.user).subscribe(
  (success) => {
    console.log("Form successfully submitted with this user: "+ this.user);
    console.log(success);
    this.toast.success("User is registered successfully !!")
   
  }, 
  
  (error: any)=>{
    console.log(error);


    // This status we are sending from springboot code
    // 400 means validation error
    if(error.status=400){

      console.log(error.error)


      // store all validation errors ie for all fields in message and toast them with line break
      let message=``
      for(let i in error.error){
        message = message + ` ${error.error[i]} <br> ` 
      
      }

      
      this.toast.error( message, '',{enableHtml:true})
    }

  },


  () => {

    console.log("completed");
  }
)



}


}
