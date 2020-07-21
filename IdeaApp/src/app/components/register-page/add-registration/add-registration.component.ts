import { Component, OnInit } from '@angular/core';

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

  onSubmit() {
    const profile = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      bio: this.bio,
      password: this.password
    }
  }
}