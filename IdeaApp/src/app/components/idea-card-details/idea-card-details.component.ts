import { Component, OnInit } from '@angular/core';
// import { Card } from 'src/app/Models/card-info'
// import { CARDSTACK } from 'src/app/Models/mock-cards';
import { Router } from '@angular/router';
import {CardServiceService} from 'src/app/services/card-service.service';
import { ProfileService } from '../../services/profile.service';
import { ProfileCreationService } from 'src/app/services/profile-creation.service';

@Component({
  selector: 'app-idea-card-details',
  templateUrl: './idea-card-details.component.html',
  styleUrls: ['./idea-card-details.component.css']
})
export class IdeaCardDetailsComponent implements OnInit {
  // cards = CARDSTACK; 
  //public index:number = 0;
  public length:number = 0;

  constructor(private router: Router, public cardservice: CardServiceService, public profileservice: ProfileService, public profilecreationservice: ProfileCreationService) { }

  ngOnInit(): void {
  }

  outOfCards(){
    this.profilecreationservice.currentCard = null; 
    this.router.navigate(['/out-of-cards']);
  }

  gotoIdeaCard(): void {
    this.profilecreationservice.currentCard = null; 
    this.length = this.cardservice.cards.length;
    console.log("length: ", this.length);
    console.log("index: ", this.cardservice.index);
    if (this.length > this.cardservice.index) {
      this.router.navigate(['/idea-card'])
    }
    else {
        console.log("End of array");
        this.outOfCards()
    }
 
  }

  gotoUserProfile()
  {
    this.profilecreationservice.currentCard = null; 
    this.router.navigate(['/other-user-page'])
  }

}
