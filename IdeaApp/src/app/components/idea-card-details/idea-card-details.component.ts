import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/Models/card-info'

@Component({
  selector: 'app-idea-card-details',
  templateUrl: './idea-card-details.component.html',
  styleUrls: ['./idea-card-details.component.css']
})
export class IdeaCardDetailsComponent implements OnInit {

  card: Card = {

    title: 'My Big Idea',
    description: 'It would be useful to create an app that allows employees in an organization to ride share.',
    contact: 'myUser'
  }

  constructor() { }

  ngOnInit(): void {

    
  }

}
