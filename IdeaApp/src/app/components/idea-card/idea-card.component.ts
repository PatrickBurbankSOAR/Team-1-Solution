import { Component, OnInit } from '@angular/core';
// import { Card } from 'src/app/Models/card-info'
import { CARDSTACK } from 'src/app/Models/mock-cards';
import { Router } from '@angular/router';
import { LikesService } from 'src/app/services/likes.service';
import { CardServiceService } from 'src/app/services/card-service.service';
import { ProfileService } from '../../services/profile.service';
import { ProfileCreationService } from '../../services/profile-creation.service';

//import { LIKEDIDEAS } from 'src/app/Models/list-of-liked-ideas';

@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.css'],

})
export class IdeaCardComponent implements OnInit {
  [x: string]: any;
  cards = CARDSTACK; 
  ideas: string[] = [];
  public length:number = 0;
  //profilecreationservice: any;
  
  // public index:number = 0;
  // int length = Array.getLength(cards);
  //likesservice: any;
  

  // count: number;
  // constructor(private appsevice: AppService) {
  // }

  constructor(private router: Router, private likesservice: LikesService, public cardservice: CardServiceService, public profileService: ProfileService, public profilecreationservice: ProfileCreationService) { }

  ngOnInit(): void { 
  }

  gotoIdeaCardDetails() {
    this.router.navigate(['/idea-card-details']);
  }

  outOfCards(){
    // this.cards[0].id = 0;
    // this.cards[0].title = "";
    // this.cards[0].description = "";
    // this.cards[0].picture = "";
    // this.cards[0].tags = "";
    // document.getElementById("cardcontent").hidden = true;
    // document.getElementById("outofIdeas").hidden = false;
    this.router.navigate(['/out-of-cards']);

  }

  nextCard() {

    this.profileService.shiftProfile();
    this.length = this.cardservice.cards.length;
    if (this.length > 1) {
      //console.log(this.length);
      //console.log(this.cardservice.index);
      this.cardservice.shiftCard();
    } else {
      console.log("End of array");
      this.outOfCards();
    }
  }

  likeCard() {
    const name = this.cardservice.cards[this.cardservice.index].title;
    console.log(name)
    this.ideas.push(name);
    this.likesservice.save(this.ideas);
    var i = 0;
    for (i=0; i <= this.cardservice.cards[0].length;i++){
      console.log("card " + this.cardservice.cards[0][i]);
    }
 
    console.log(this.cardservice.cards[0].id);
    console.log(this.cardservice.cards[0].title);
    this.profilecreationservice.addCard(this.cardservice.cards[0].id, this.cardservice.cards[0].picture, this.cardservice.cards[0].title, this.cardservice.cards[0].description, this.cardservice.cards[0].contact, this.cardservice.cards[0].tags);

    //console.log(this.length); //6
    //console.log(this.cardservice.index); //5

    this.profileService.shiftProfile();
    this.length = this.cardservice.cards.length;
    if (this.length > 1) {
      //console.log(this.length);
      this.cardservice.shiftCard();
    } else {
        console.log("End of array");
        this.outOfCards();
    }
  }

  // getCardByIndex(){
  //   this.cardservice.getCardByIndex();
  // }
}
