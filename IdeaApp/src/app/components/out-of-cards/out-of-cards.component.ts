import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-out-of-cards',
  templateUrl: './out-of-cards.component.html',
  styleUrls: ['./out-of-cards.component.css']
})
export class OutOfCardsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToIdeaCard() {
    this.router.navigate(['/idea-card']);
  }

}
