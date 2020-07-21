import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Profile } from '../models/Profile-Info';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _profile = new BehaviorSubject<Profile[]>([]);

  profile$ = this._profile.asObservable();

  getProfiles(): Profile[] {
    return this._profile.getValue();
  }

  private setProfiles(val: Profile[]){
    this._profile.next(val);
  }

  // addProfile(Profile: Profile){
  //    this.Profiles = [
  //     this.
  //    ]
     
  // }
}
