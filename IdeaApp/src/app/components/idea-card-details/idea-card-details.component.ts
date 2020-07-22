import { Component, OnInit } from '@angular/core';
// import { Card } from 'src/app/Models/card-info'
import { CARDSTACK } from 'src/app/Models/mock-cards';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idea-card-details',
  templateUrl: './idea-card-details.component.html',
  styleUrls: ['./idea-card-details.component.css']
})
export class IdeaCardDetailsComponent implements OnInit {
  cards = CARDSTACK; 
  public index:number = 0;

  // card: Card = {
  //   id: 100,
  //   picture:"https://placeimg.com/600/300/animals",
  //   title: 'My Big Idea',
  //   description: 'It would be useful to create an app that allows employees in an organization to ride share.',
  //   contact: 'myUser@email.com',
  //   tags: "Tags: IoT   Retail   Security"
  // }

  constructor(private router: Router) { }

  ngOnInit(): void {

    
  }

  gotoIdeaCard(): void {
    this.router.navigate(['/idea-card'])
  }

}
