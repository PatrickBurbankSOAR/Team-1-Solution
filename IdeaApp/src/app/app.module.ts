import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
<<<<<<< HEAD
import { LoginHeaderComponent } from './components/login-header/login-header.component';
=======
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { IdeaCardComponent } from './components/idea-card/idea-card.component';
import { SubmitIdeaPageComponent } from './components/submit-idea-page/submit-idea-page.component';
>>>>>>> e87824ebc150fe2c8e693d328d41426441dfecd3

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
<<<<<<< HEAD
    LoginHeaderComponent
=======
    RegisterPageComponent,
    LoginPageComponent,
    ProfilePageComponent,
    LandingPageComponent,
    IdeaCardComponent,
    SubmitIdeaPageComponent
>>>>>>> e87824ebc150fe2c8e693d328d41426441dfecd3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
