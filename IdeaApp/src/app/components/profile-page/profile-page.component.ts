import { Component, OnInit } from '@angular/core';
// import { User } from './user';
import { Profile } from 'src/app/Models/Profile-Info'
import { Router } from '@angular/router';
import { LikesService } from 'src/app/services/likes.service';
import { ProfileCreationService } from 'src/app/services/profile-creation.service';
import { AddIdeaService } from 'src/app/services/add-idea.service';
import { CardServiceService } from 'src/app/services/card-service.service';
import { Card } from 'src/app/Models/card-info';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  likedItem;
  createdItem;
  name;
  email;
  phone;
  bio;
  tags;



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
  public length:number = 0;


  constructor(private router: Router, private addideaservice: AddIdeaService, private likesservice: LikesService, public profilecreationservice: ProfileCreationService, public cardservice: CardServiceService) { 
  }


  gotoMoreDetails(card: Card): void {
    this.profilecreationservice.currentCard = card;
    this.router.navigate(['/idea-card-details/']);
  }

  ngOnInit(): void {

    //DIsplaying liked item
    this.likeArray = this.likesservice.fetch();
    console.log(this.likeArray[this.likeArray.length - 1]);
    this.likedItem = this.likeArray[this.likeArray.length -1];
    console.log(this.profilecreationservice.likedCards)
    //Hooking up registration info
    this.name = this.profilecreationservice.fetchName();
    this.email = this.profilecreationservice.fetchEmail();
    this.phone = this.profilecreationservice.fetchPhone();
    this.bio = this.profilecreationservice.fetchBio();
    this.tags = this.profilecreationservice.fetchTags();

    //Displaying created item
    this.createdItem = this.addideaservice.fetchIdea();

  }

  saveChanges() {

    // this.email = this.profilecreationservice.fetchEmail();
    // this.profilecreationservice.updateInfo(this.email).subscribe(email => this.email = email);
    // this.email = this.profilecreationservice.fetchEmail();

    // console.log(this.email)

    // window.location.reload();

    
    // this.phone = this.profilecreationservice.fetchPhone();
    // this.bio = this.profilecreationservice.fetchBio();

    
  }

  outOfCards(){
    this.router.navigate(['/out-of-cards']);
  }

  gotoIdeaPage() {

    this.length = this.cardservice.cards.length;
    if (this.length > 1) {
      this.router.navigate(['/idea-card'])
    }
    else {
        //console.log("End of array");
        this.outOfCards()
    }
  }


  gotoLikedIdeas() {
    this.router.navigate(['/liked-cards']);
    
  }

}
