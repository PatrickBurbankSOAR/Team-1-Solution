import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/Models/card-info'
import { Router } from '@angular/router';

@Component({
  selector: 'app-idea-card-details',
  templateUrl: './idea-card-details.component.html',
  styleUrls: ['./idea-card-details.component.css']
})
export class IdeaCardDetailsComponent implements OnInit {

  card: Card = {
    id: 100,
    picture:"https://placeimg.com/600/300/animals",
    title: 'My Big Idea',
    description: 'It would be useful to create an app that allows employees in an organization to ride share.',
    contact: 'myUser@email.com'
  }

  constructor(private router: Router) { }

  ngOnInit(): void {

    
  }

  gotoIdeaCard(): void {
    this.router.navigate(['/idea-card'])
  }

}
