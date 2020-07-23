import { Component, OnInit } from '@angular/core';
import { Profiles } from '../../../Models/Mock-Profiles';
import { ProfileCreationService } from 'src/app/services/profile-creation.service'

 // import { RegisterPageComponent } from '../register-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-registration',
  templateUrl: './add-registration.component.html',
  styleUrls: ['./add-registration.component.css']

})
export class AddRegistrationComponent implements OnInit {

  name:string;
  email:string;
  phone:string;
  bio:string;
  password:string;
  
  constructor(private router: Router, private profilecreationservice: ProfileCreationService) { }

  ngOnInit(): void { }

  gotoLogin(): void {
    this.router.navigate(['/login-page']);
  }

  signUp() {

    console.log(this.name)

    this.profilecreationservice.updateInfo(this.email, this.phone, this.bio);

    this.router.navigate(['/submit-idea-page']);
    
 

  }

  }



