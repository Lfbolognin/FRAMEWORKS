import { TaskService } from './../task.service';
import { User } from './../../model/user';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user = 'Rafa';
  userr = 'Rafa!';
  currentDate = new Date();
  tasks: Task[] =[];
  users: User[] = [];

  constructor(private router: Router, private TaskService: TaskService){}

  //----------------------------------------------------

  ngOnInit(): void {
    this.loadTasks();
    console.log(this.tasks)
  }
  loadTasks() {
    console.log('Carregar as tasks');
    this.tasks = this.TaskService.tasks
  }


//----------------------------------------------------

//----------------------------------------------------


addTask() {
  this.router.navigateByUrl('/task', {
    state: this.tasks,
});
}

addUser() {
  this.router.navigateByUrl('/user', {
    state: this.users,
});
}

}

