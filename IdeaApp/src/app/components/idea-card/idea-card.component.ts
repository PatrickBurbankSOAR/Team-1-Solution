import { Component, OnInit } from '@angular/core';
// import { Card } from 'src/app/Models/card-info'
import { CARDSTACK } from 'src/app/Models/mock-cards';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.css'],

})
export class IdeaCardComponent implements OnInit {
  cards = CARDSTACK; 
  // public card: Card[] = CARDSTACK;
  public index:number = 0;
  userProfilePic:string;

  constructor(private router: Router) { }

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
    this.index++;
  }

  likeCard() {
    this.index++;
    //Add to liked cards
    //{{this.cards[this.index].title}}

  }
}
