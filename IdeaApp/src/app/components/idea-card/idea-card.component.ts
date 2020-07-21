import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/Models/card-info'

@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.css']
})
export class IdeaCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  card: Card = {

    title: 'my great idea',
    description: 'to create things!',
    contact: 'bigidea@cgi.com'

  }

}
