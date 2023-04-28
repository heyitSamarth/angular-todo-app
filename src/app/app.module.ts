import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoItemsComponent } from './components/todo-items/todo-items.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { AuthServiceService } from './service/auth-service.service';
import { AuthGuardServiceService } from './service/gaurds/auth-guard-service.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TodoItemsComponent,
    AddTodoComponent,
    AboutComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthServiceService,AuthGuardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
