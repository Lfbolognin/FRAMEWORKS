import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 isError = false;

 isCorrect = false;

user = ""
pwd = ""


 login(){   

//     this.isError = true;
    
// console.log("User = " + this.user + " Password = " + this.pwd)



if (
  this.user == "luiz" && this.pwd == "luiz"){
this.isCorrect = true;
this.isError = false;
  }
else{
  this.isCorrect = false;
  this.isError = true;
 
}
 }
}
