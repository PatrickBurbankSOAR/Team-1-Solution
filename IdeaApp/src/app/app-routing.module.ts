import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginPageComponent } from '../app/components/login-page/login-page.component';
import { RegisterPageComponent } from '../app/components/register-page/register-page.component';
import { AddRegistrationComponent } from '../app/components/register-page/add-registration/add-registration.component';
import { ProfilePageComponent } from '../app/components/profile-page/profile-page.component';
import { LandingPageComponent } from '../app/components/landing-page/landing-page.component';
import { SubmitIdeaPageComponent } from '../app/components/submit-idea-page/submit-idea-page.component';
import { IdeaCardComponent } from '../app/components/idea-card/idea-card.component';
import { IdeaCardDetailsComponent} from '../app/components/idea-card-details/idea-card-details.component';
import { OtherUserProfilePageComponent } from '../app/components/other-user-profile-page/other-user-profile-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'register-page', component: RegisterPageComponent },
  { path: 'add-registration', component: AddRegistrationComponent },
  { path: 'profile-page', component: ProfilePageComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'submit-idea-page', component: SubmitIdeaPageComponent },
  { path: 'idea-card', component: IdeaCardComponent },
  { path: 'idea-card-details', component: IdeaCardDetailsComponent },
  { path: 'other-user-page', component: OtherUserProfilePageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private router: Router) { }




 }
