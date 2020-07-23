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

  constructor(private router: Router, public cardservice: CardServiceService, public profileservice: ProfileService) { }

  ngOnInit(): void {
  }

  gotoIdeaCard(): void {
    this.router.navigate(['/idea-card'])
    //pass index?
  }

  gotoUserProfile()
  {
    this.router.navigate(['/other-user-page'])
  }

}
