import { Injectable } from '@angular/core';
import { CARDSTACK } from 'src/app/Models/mock-cards';
 
@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
  cards:any = CARDSTACK;

  constructor() { 
  }

  shiftCard() {
   this.cards.shift();
  }
}
