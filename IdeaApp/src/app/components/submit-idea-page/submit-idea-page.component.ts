import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/Models/card-info'

@Component({
  selector: 'app-submit-idea-page',
  templateUrl: './submit-idea-page.component.html',
  styleUrls: ['./submit-idea-page.component.css']
})
export class SubmitIdeaPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  card: Card = {

    title: 'my great idea',
    description: 'to create things!',
    contact: 'bigidea@cgi.com'

  }

}
