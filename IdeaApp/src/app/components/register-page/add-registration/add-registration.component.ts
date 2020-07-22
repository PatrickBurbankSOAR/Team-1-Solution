import { Component, OnInit } from '@angular/core';
import { Profiles } from '../../../Models/Mock-Profiles';

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
  
  constructor(private router: Router) { }

  ngOnInit(): void { }

  gotoLogin(): void {
    this.router.navigate(['/login-page']);
  }

  signUp() {
    //Would be call to backend at some point
    this.router.navigate(['/submit-idea-page']);
    console.log(name)
    //if (name != '')

  }

  }



