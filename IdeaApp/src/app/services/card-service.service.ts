import { Injectable } from '@angular/core';
import { CARDSTACK } from 'src/app/Models/mock-cards';

 
@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
  cards:any = CARDSTACK;
  public index:number = 0;
  public length:number = this.cards.length;

  constructor() { 
  }

  shiftCard() {
   this.cards.shift();
   //this.index ++;
   //this.cards = this.cards[this.index];
  }

  getCardByIndex(){
    //this.cards = this.cards;
  }

}
