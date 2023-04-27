import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TrabalhoFotosComponent } from './components/trabalho-fotos/trabalho-fotos.component';
import { CreateComponent } from './components/create/create.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';

const routes: Routes = [
  {path: "login", component: LoginComponent}, 
  {path: "hero", component: HeroComponent},
  {path: "create", component: CreateComponent}, 
  {path: "Trabalho-fotos", component: TrabalhoFotosComponent},
  {path: "page-not-found", component: PageNotFoundComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "", redirectTo: "/create" , pathMatch: "full"},
  {path: "**", component: PageNotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
