import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './components/error/error.component';
import {HttpClientModule} from '@angular/common/http' 
import { FormsModule } from '@angular/forms';
import { AddComponent } from './components/add/add.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersDetailsComponent,
    HeaderComponent,
    ErrorComponent,
    AddComponent
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
