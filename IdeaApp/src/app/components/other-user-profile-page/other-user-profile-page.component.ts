import { Component, OnInit } from '@angular/core';
import { Profiles } from '../../Models/Mock-Profiles';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { CardServiceService } from 'src/app/services/card-service.service';
import { ProfileCreationService } from '../../services/profile-creation.service';

@Component({
  selector: 'app-other-user-profile-page',
  templateUrl: './other-user-profile-page.component.html',
  styleUrls: ['./other-user-profile-page.component.css']
})
export class OtherUserProfilePageComponent implements OnInit {
  public length:number = 0;
   
  constructor(private router: Router, public profileService: ProfileService, public cardservice: CardServiceService, public profilecreationservice: ProfileCreationService) { }

  ngOnInit(): void {  }

  outOfCards(){
    this.profilecreationservice.currentCard = null; 
    this.router.navigate(['/out-of-cards']);
  }

  gotoIdeaPage(): void {
    this.length = this.cardservice.cards.length;
    if (this.length > 1) {
      this.router.navigate(['/idea-card'])
    }
    else {
        console.log("End of array");
        this.outOfCards()
    }
 
  }

}
