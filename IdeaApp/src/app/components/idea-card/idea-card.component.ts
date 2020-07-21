import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/Models/card-info'
import { Router } from '@angular/router';

@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.css']
})
export class IdeaCardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  card: Card = {

    title: 'my great idea',
    description: 'to create things!',
    contact: 'bigidea@cgi.com'

  }

  gotoIdeaCardDetails() {
    this.router.navigate(['/idea-card-details']);
  }
}
