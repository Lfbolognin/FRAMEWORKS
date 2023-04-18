import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  isError = false;

  isCorrect = false;
 
 user = ""
 pwd = ""
 email = ""
 pwd1 = ""
  login(){   
 
 //     this.isError = true;
     
 // console.log("User = " + this.user + " Password = " + this.pwd)
 
 if(this.pwd == this.pwd1 && this.user =="luiz" && this.email =="lfbolognin"){
  this.isCorrect = true;
  this.isError = false;
 }
 else{
this.isCorrect = false;
this.isError = true;
}


 
 
 
//  if (
//    this.user == "luiz" && this.pwd == "luiz"){
//  this.isCorrect = true;
//  this.isError = false;
//    }
//  else{
//    this.isCorrect = false;
//    this.isError = true;
  
 }
  
}
