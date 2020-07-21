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
