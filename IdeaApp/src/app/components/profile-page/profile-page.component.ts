import { Component, OnInit } from '@angular/core';
// import { User } from './user';
import { Profile } from 'src/app/Models/Profile-Info'
import { Router } from '@angular/router';
import { LikesService } from 'src/app/services/likes.service'
import { ProfileCreationService } from 'src/app/services/profile-creation.service'

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  likedItem;
  name;
  email;
  phone;
  bio;



  // profile: Profile = {

  //   name: 'myUser',
  //   password: '12345',
  //   phone: 5555555555,
  //   email: 'myUser@gmail.com',
  //   bio: 'Looking to create and view cool new ideas.',
  //   // myIdeas: ["Idea#1", "idea12"],
  //   // likedIdeas:  ["puppies", "kittens"],

  // }

  likeArray: string[]



  constructor(private router: Router, private likesservice: LikesService, private profilecreationservice: ProfileCreationService) {


    
  }



  ngOnInit(): void {

    this.likeArray = this.likesservice.fetch();
    console.log(this.likeArray[this.likeArray.length - 1]);

    this.likedItem = this.likeArray[this.likeArray.length -1];

    //Hooking up registration info
    this.name = this.profilecreationservice.fetchName();
    this.email = this.profilecreationservice.fetchEmail();
    this.phone = this.profilecreationservice.fetchPhone();
    this.bio = this.profilecreationservice.fetchBio();

  }

  gotoIdeaPage() {
    this.router.navigate(['/idea-card']);
  }

  printLikes() {

    var printThis = "";
    for (var i = 0; i < this.likeArray.length; i++) {
      printThis += "<br>" + this.likeArray[i];
    }
    return printThis; // <-- to be printed to the div
  }

}
