import { Component, OnInit } from '@angular/core';
// import { Card } from 'src/app/Models/card-info'
// import { CARDSTACK } from 'src/app/Models/mock-cards';
import { Router } from '@angular/router';
import { LikesService } from 'src/app/services/likes.service';
import {CardServiceService} from 'src/app/services/card-service.service';

//import { LIKEDIDEAS } from 'src/app/Models/list-of-liked-ideas';

@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.css'],

})
export class IdeaCardComponent implements OnInit {
<<<<<<< HEAD
  // cards = CARDSTACK; 
  ideas: string[];

  public index:number = 0;
  userProfilePic:string;
  //likesservice: any;
  

  // count: number;
  // constructor(private appsevice: AppService) {
  // }

  constructor(private router: Router, private likesservice: LikesService, public cardservice: CardServiceService) { }
=======
  cards = CARDSTACK; 
  ideas: string[] = [];
  // public card: Card[] = CARDSTACK;
  public index:number = 0;
  userProfilePic:string;


  constructor(private router: Router, private likesservice: LikesService) { }
>>>>>>> 5341aa0fc4e6d7a7994a0f209a406a09fd95ac5c

  ngOnInit(): void { 
    this.userProfilePic = 'assets/images/profilePicture.jpg'
  }

  gotoIdeaCardDetails() {
    this.router.navigate(['/idea-card-details']);
  }

  gotoAddIdeaPage() {
    this.router.navigate(['/submit-idea-page']);
  }

  gotoProfilePage() {
    this.router.navigate(['/profile-page']);
  }

  signOut() {
    this.router.navigate(['/login-page']);
  }

  nextCard() {
    this.cardservice.shiftCard();
    
  }

  likeCard() {
    this.cardservice.shiftCard();
    const name = this.cards[this.index].title;
    this.ideas.push(name);
    this.likesservice.save(this.ideas);

  }
}
