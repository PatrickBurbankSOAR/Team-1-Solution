import { Component, OnInit } from '@angular/core';
// import { User } from './user';
import { Profile } from 'src/app/Models/Profile-Info'
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {


  profile: Profile = {

    name: 'myUser',
    password: '12345',
    phone: 5555555555,
    email: 'myUser@gmail.com',
    bio: 'Looking to create and view cool new ideas.'
  }



  constructor() { }

  ngOnInit(): void {
  }

}
