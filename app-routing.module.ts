import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  {path:"welcome",component:WelcomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:"score",component:ScoreComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
