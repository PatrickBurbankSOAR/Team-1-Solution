import { Component, OnInit } from '@angular/core';
// import { Card } from 'src/app/Models/card-info'
import { CARDSTACK } from 'src/app/Models/mock-cards';
import { Router } from '@angular/router';
import { LikesService } from 'src/app/services/likes.service';
import { CardServiceService } from 'src/app/services/card-service.service';

//import { LIKEDIDEAS } from 'src/app/Models/list-of-liked-ideas';

@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.css'],

})
export class IdeaCardComponent implements OnInit {
  cards = CARDSTACK; 
  ideas: string[] = [];

  public index:number = 0;
  //likesservice: any;
  

  // count: number;
  // constructor(private appsevice: AppService) {
  // }

  constructor(private router: Router, private likesservice: LikesService, public cardservice: CardServiceService) { }

  ngOnInit(): void { 
  }

  gotoIdeaCardDetails() {
    this.router.navigate(['/idea-card-details']);
  }

  nextCard() {
    this.cardservice.shiftCard();
  }

  likeCard() {
    
    const name = this.cardservice.cards[this.index].title;
    console.log(name)
    this.ideas.push(name);
    this.likesservice.save(this.ideas);
    this.cardservice.shiftCard();

  }
}
