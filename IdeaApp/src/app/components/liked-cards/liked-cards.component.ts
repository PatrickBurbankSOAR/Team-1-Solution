import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CardServiceService} from 'src/app/services/card-service.service';
import { ProfileService } from '../../services/profile.service';
import { ProfileCreationService } from '../../services/profile-creation.service';

@Component({
  selector: 'app-liked-cards',
  templateUrl: './liked-cards.component.html',
  styleUrls: ['./liked-cards.component.css']
})
export class LikedCardsComponent implements OnInit {

  constructor(private router: Router, public cardservice: CardServiceService, public profileservice: ProfileService, public profilecreationservice: ProfileCreationService) { }
  public length:number = 0;
  ngOnInit(): void {
  }

  outOfCards(){
    this.profilecreationservice.currentCard = null; 
    this.router.navigate(['/out-of-cards']);
  }

  gotoIdeaCard(): void {
    this.length = this.cardservice.cards.length;
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
    this.router.navigate(['/other-user-page'])
  }


}
