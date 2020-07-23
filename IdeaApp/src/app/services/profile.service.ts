import { Injectable } from '@angular/core';
import { Profiles } from '../Models/Mock-Profiles';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profiles:any = Profiles;
  
  constructor() {}

  shiftProfile()
  {
    this.profiles.shift();
  }



  
  
  




 
}
