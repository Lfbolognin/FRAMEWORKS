import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-beto',
  templateUrl: './login-beto.component.html',
  styleUrls: ['./login-beto.component.css']
})
export class LoginBetoComponent {
  constructor(private router:Router) { }

  isError = false;

  isCorrect = false;

  user = "" 

  pwd = ""

  login(){
    

    if(this.user == "rafa" && this.pwd == "rafa") {
      this.isCorrect = true;
      this.isError = false;
      this.router.navigate (['/dashboard']);
  }

    else {
      this.isCorrect = false;
      this.isError = true;
    }

  }

}
