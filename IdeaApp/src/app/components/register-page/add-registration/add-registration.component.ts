import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 61a4a425bc75c777da06f771479e49f8f7c4d2f3
>>>>>>> 3c21457dd923f4e3421261b0a73617b52a36e3f2
 // import { RegisterPageComponent } from '../register-page.component';
import { Router } from '@angular/router';

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 61a4a425bc75c777da06f771479e49f8f7c4d2f3
>>>>>>> 3c21457dd923f4e3421261b0a73617b52a36e3f2

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

  onSubmit() {
    const profile = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      bio: this.bio,
      password: this.password
    }
  }

  gotoLogin(): void {
    this.router.navigate(['/login-page']);
  }

  signUp() {
    //Would be call to backend at some point
    this.router.navigate(['/idea-page']);
    console.log(name)
    //if (name != '')

  }
}