import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { LoginBetoComponent } from './components/login-beto/login-beto.component';
import { LoginComponent } from './components/login/login.component';
import { CreateLoginComponent } from './components/create-login/create-login.component';
import { HeroComponent } from './components/hero/hero.component';
import { GridComponent } from './components/grid/grid.component';
import { TrabalhoComponent } from './components/trabalho/trabalho.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path: "login-beto", component:LoginBetoComponent},
  {path: "login-rafa", component:LoginComponent},
  {path: "task", component:TaskComponent},
  {path: "create-login", component:CreateLoginComponent},
  {path: "hero", component:HeroComponent},
  {path: "grid", component:GridComponent},
  {path: "trabalho", component:TrabalhoComponent},
  {path: "dashboard", component:DashboardComponent},
  {path: '', redirectTo: '/login-beto', pathMatch: 'full'},
  {path: "**", component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
