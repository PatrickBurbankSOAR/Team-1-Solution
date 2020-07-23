import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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