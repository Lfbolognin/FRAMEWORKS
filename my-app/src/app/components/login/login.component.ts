import { DashboardComponent } from './../dashboard/dashboard.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router) { }

isError = false;

isCorrect = false;

user = ""
pwd = ""


login(){   





if (
  this.user == "luiz" && this.pwd == "luiz"){
this.isCorrect = true;
this.isError = false;
this.router.navigate (['/dashboard']);
  }
else{
  this.isCorrect = false;
  this.isError = true;
  
}
}
}