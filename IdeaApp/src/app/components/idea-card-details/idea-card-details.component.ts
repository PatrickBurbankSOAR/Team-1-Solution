import { Component, OnInit } from '@angular/core';
// import { Card } from 'src/app/Models/card-info'
// import { CARDSTACK } from 'src/app/Models/mock-cards';
import { Router } from '@angular/router';
import {CardServiceService} from 'src/app/services/card-service.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-idea-card-details',
  templateUrl: './idea-card-details.component.html',
  styleUrls: ['./idea-card-details.component.css']
})
export class IdeaCardDetailsComponent implements OnInit {
  // cards = CARDSTACK; 
  //public index:number = 0;
  public length:number = 0;

  constructor(private router: Router, public cardservice: CardServiceService, public profileservice: ProfileService) { }

  ngOnInit(): void {
  }

  outOfCards(){
    this.router.navigate(['/out-of-cards']);
  }

  gotoIdeaCard(): void {
    this.length = this.cardservice.cards.length;
    if (this.length > 1) {
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
