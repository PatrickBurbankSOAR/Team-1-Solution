import { Component, OnInit } from '@angular/core';
// import { Card } from 'src/app/Models/card-info'
import { CARDSTACK } from 'src/app/Models/mock-cards';
import { Router } from '@angular/router';
import { LikesService } from 'src/app/services/likes.service';
import { CardServiceService } from 'src/app/services/card-service.service';
import { ProfileService } from '../../services/profile.service';

//import { LIKEDIDEAS } from 'src/app/Models/list-of-liked-ideas';

@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.css'],

})
export class IdeaCardComponent implements OnInit {
  cards = CARDSTACK; 
  ideas: string[] = [];
  public length:number = 0;
  public index:number = 0;
  // int length = Array.getLength(cards);
  //likesservice: any;
  

  // count: number;
  // constructor(private appsevice: AppService) {
  // }

  constructor(private router: Router, private likesservice: LikesService, public cardservice: CardServiceService, public profileService: ProfileService) { }

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
    this.cardservice.shiftCard();
    this.profileService.shiftProfile();
    this.length = this.cardservice.cards.length;
    if (this.length > 1) {
      //console.log(this.length);
      this.cardservice.shiftCard();
    } else {
      console.log("End of array");
      this.outOfCards();
    }
<<<<<<< HEAD
    console.log(this.length);
=======
>>>>>>> e7b6695d011b178fc7acdb9c75160d74d871bd3c
  }

  likeCard() {
    const name = this.cardservice.cards[this.index].title;
    console.log(name)
    this.ideas.push(name);
    this.likesservice.save(this.ideas);

    this.length = this.cardservice.cards.length;
    if (this.length > 1) {
      //console.log(this.length);
      this.cardservice.shiftCard();
    } else {
        console.log("End of array");
        this.outOfCards();
    }
  }
}
