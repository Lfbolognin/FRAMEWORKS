import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './components/login/login.component';
import { LoginBetoComponent } from './components/login-beto/login-beto.component';
import { FormsModule } from '@angular/forms';
import { GridComponent } from './components/grid/grid.component';
import { TrabalhoComponent } from './components/trabalho/trabalho.component';
import { CreateLoginComponent } from './components/create-login/create-login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TaskComponent } from './components/task/task.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    LoginComponent,
    LoginBetoComponent,
    GridComponent,
    TrabalhoComponent,
    CreateLoginComponent,
    PagenotfoundComponent,
    DashboardComponent,
    TaskComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
