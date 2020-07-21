import { Injectable } from '@angular/core';
import { Profiles } from '../Models/Mock-Profiles';
import { Profile } from '../Models/Profile-Info';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profiles = Profiles;

  constructor() {}

  ngOnInit() {}

  addProfile( )

{
  new Profile();
}

  
  
  




 
}
