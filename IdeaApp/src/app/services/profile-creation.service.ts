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

  public id;
  public pic;
  public title;
  public desc;
  public contact;
  public tags;

  public likedCards: Card[];
  


addCard(id: number, picture: string, title: string, description: string, contact: string, tags: string){
  console.log("Add card");
  //console.log("Cards currently: " + cards);
  //var i = 0;
  //var j = 0;
  //let tempCard: Card = {id, picture, title, description, contact, tags};
  //this.likedCards.push({id, picture, title, description, contact, tags});
  this. id = id; 
  this.pic = picture; 
  this.title = title;
  this.desc = description;
  this.contact = contact
  this.tags = tags;
  

  // for (j = 0; j < this.likedCards.length; j++){
  //     console.log("LikedCards: " + this.likedCards[0][j]);
  //   }
  }


// addCard(id: number, picture: string, title: string, description: string, contact: string, tags: string){
//   console.log("Passed: " + id);
//   console.log("Passed: " + tags);


// }

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