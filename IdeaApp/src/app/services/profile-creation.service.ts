import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card } from '../Models/card-info';
import { TitleCasePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProfileCreationService {

  constructor() { }

  private name;
  private email;
  private phone;
  private bio;
  private tags;

  public likedCards: Card[] = [];
  public myCards: Card[] = [];
  public currentCard: Card = null;
  

addCard(card: Card){
  this.likedCards.push(card);
  console.log("liked cards: ", this.likedCards);
}

myIdeaCards(card: Card){
  this.myCards.push(card);
  console.log("my cards: ", this.myCards);
}


viewLikedCards(){
  return this.likedCards;
}

saveInfo(name, email, phone, bio, tags) {

  this.name = name;
  this.email = email;
  this.phone = phone;
  this.bio = bio;
  this.tags = tags;

}

updateInfo(email): Observable<String> {

  return of(email);
  // this.phone = phone;
  // this.bio = bio;
}

fetchName() { 

  return this.name;

}

fetchEmail() {

  return this.email;

}

fetchPhone() {

  return this.phone;

}

fetchBio() {

  return this.bio;
}

fetchTags() {
  return this.tags;
}
}