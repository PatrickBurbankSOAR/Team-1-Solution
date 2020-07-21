import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
 // import { RegisterPageComponent } from '../register-page.component';

>>>>>>> 5e9258a9d40641512e509ee8eb84fb70f2c7c64f

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