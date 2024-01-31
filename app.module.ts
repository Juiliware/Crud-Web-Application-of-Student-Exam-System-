import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegistrationComponent } from './registration/registration.component';
import { ScoreComponent } from './score/score.component';


@NgModule({
  declarations: [
    AppComponent,
    
   
   LoginComponent,
    WelcomeComponent,
    RegistrationComponent,
    ScoreComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,// add it to use ngModel
    HttpClientModule // add it to use HttpCleint class
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
