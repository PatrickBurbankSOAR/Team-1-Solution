import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  user: User = {
    name: 'myUser',
    email: 'myUser@gmail.com',
    phone: '555-555-5555',
    bio: 'Looking to share great new ideas!',
    createdIdeas: 'Cool Idea #1',
    likedIdeas: "Someone Else's Cool Idea"
  };


  constructor() { }

  ngOnInit(): void {
  }

}
