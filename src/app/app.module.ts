import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { HomeComponent } from './views/home/home.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { SigninComponent } from './views/auth/signin/signin.component';
import { SignupComponent } from './views/auth/signup/signup.component';
import { DefaultBarComponent } from './components/bar/default-bar/default-bar.component';
import { DefaultFooterComponent } from './components/footer/default-footer/default-footer.component';
import { ActionBarComponent } from './components/bar/action-bar/action-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoFormComponent,
    HomeComponent,
    NotfoundComponent,
    SigninComponent,
    SignupComponent,
    DefaultBarComponent,
    DefaultFooterComponent,
    ActionBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
