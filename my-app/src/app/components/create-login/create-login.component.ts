import { Component } from '@angular/core';

@Component({
  selector: 'app-create-login',
  templateUrl: './create-login.component.html',
  styleUrls: ['./create-login.component.css']
})
export class CreateLoginComponent {
  isError = false;

  isCorrect = false;

  user= ""

  name= ""

  pwd= "" 

  pwd1 = ""

  login(){
    

    if(this.pwd == this.pwd1 && this.user == "rafa" && this.name == "rafa") {
      this.isCorrect = true;
      this.isError = false;
    }

    else{
      this.isCorrect = false;
      this.isError = true;
    }

    console.log("User = " + this.user + " Password = " + this.pwd)

  }

}

