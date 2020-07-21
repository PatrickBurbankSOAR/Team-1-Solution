import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Card } from 'src/app/Models/card-info';
import { CARDSTACK } from 'src/app/Models/mock-cards';
// import { Card } from './card';
// import { data } from './cards.json';

// import { trigger, keyframes, animate, transition } from "@angular/animations";
// import * as kf from './keyframes';
// import { Subject } from 'rxjs';
=======
import { Card } from 'src/app/Models/card-info'
import { Router } from '@angular/router';
>>>>>>> 3c21457dd923f4e3421261b0a73617b52a36e3f2

@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.css'],

})
export class IdeaCardComponent implements OnInit {
  cards = CARDSTACK; 
  // public card: Card[] = CARDSTACK;
  public index = 0;

  constructor(private router: Router) { }

  // card: Card = {
  //   id: 20,
  //   picture:'https://placeimg.com/600/300/animals',
  //   title: 'my great idea',
  //   description: 'to create things!',
  //   contact: 'bigidea@cgi.com'

  // }

  ngOnInit(): void { }
   

  gotoIdeaCardDetails() {
    this.router.navigate(['/idea-card-details']);
  }
}
