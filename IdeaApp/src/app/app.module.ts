import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { IdeaCardComponent } from './components/idea-card/idea-card.component';
import { SubmitIdeaPageComponent } from './components/submit-idea-page/submit-idea-page.component';
import { AddRegistrationComponent } from './components/register-page/add-registration/add-registration.component';
import { AddSubmitComponent } from './components/submit-idea-page/add-submit/add-submit.component';
import { RegistrationMainPageComponent } from './components/register-page/registration-main-page/registration-main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    RegisterPageComponent,
    LoginPageComponent,
    ProfilePageComponent,
    LandingPageComponent,
    IdeaCardComponent,
    SubmitIdeaPageComponent,
    AddRegistrationComponent,
<<<<<<< HEAD
    AddSubmitComponent
=======
    AddSubmitComponent,
    RegistrationMainPageComponent
    
>>>>>>> 5e9258a9d40641512e509ee8eb84fb70f2c7c64f
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
