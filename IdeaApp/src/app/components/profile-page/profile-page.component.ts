import { Component, OnInit } from '@angular/core';
// import { User } from './user';
import { Profile } from 'src/app/Models/Profile-Info'
import { Router } from '@angular/router';

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
    bio: 'Looking to create and view cool new ideas.',
    myIdeas: ["Idea#1", "idea12"],
    likedIdeas:  ["puppies", "kittens"],

  }



  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoIdeaPage() {
    this.router.navigate(['/idea-card']);
  }
}
