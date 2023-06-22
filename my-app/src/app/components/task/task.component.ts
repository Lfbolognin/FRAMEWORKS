import { TaskService } from './../task.service'
import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router'
import { Task } from 'src/app/model/task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  nome = new FormControl('')
  descricao = new FormControl('')
  responsavel = new FormControl('')
  dt_inicio = new FormControl('')
  dt_fim = new FormControl('')

  tasks: Task[] = []

  constructor(private router: Router, private TaskService: TaskService) {}

  addTask() {
    const t = this.dataToObject()
    this.TaskService.tasks.push(t)
    this.limparForm()
    this.router.navigateByUrl('/dashboard')
  }

  dataToObject() {
    let task = new Task() // instaciasmos um objeto
    task.nome = this.nome.value!
    task.descricao = this.descricao.value!
    task.responsavel = this.responsavel.value!
    task.dt_inicio = new Date(this.dt_inicio.value!)
    task.dt_fim = new Date(this.dt_fim.value!)

    return task
  }

  limparForm() {
    this.nome.setValue('')
    this.descricao.setValue('')
    this.responsavel.setValue('')
    this.dt_inicio.setValue('')
    this.dt_fim.setValue('')
  }
}
