import { Component, OnInit } from '@angular/core';
import { Profiles } from '../../../Models/Mock-Profiles';

 // import { RegisterPageComponent } from '../register-page.component';



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
  
  constructor() { }

  ngOnInit(): void { }



  }
