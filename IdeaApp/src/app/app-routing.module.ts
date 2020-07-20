import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from '../app/components/login-page/login-page.component';
import { RegisterPageComponent } from '../app/components/register-page/register-page.component';
import { ProfilePageComponent } from '../app/components/profile-page/profile-page.component';
import { LandingPageComponent } from '../app/components/landing-page/landing-page.component';
import { SubmitIdeaPageComponent } from '../app/components/submit-idea-page/submit-idea-page.component';
import { IdeaCardComponent } from '../app/components/idea-card/idea-card.component';


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'register-page', component: RegisterPageComponent },
  { path: 'profile-page', component: ProfilePageComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'submit-idea-page', component: SubmitIdeaPageComponent },
  { path: 'idea-card', component: IdeaCardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
