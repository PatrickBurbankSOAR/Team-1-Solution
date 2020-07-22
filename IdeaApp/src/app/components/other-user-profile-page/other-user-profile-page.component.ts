import { Component, OnInit } from '@angular/core';
import { Profiles } from '../../Models/Mock-Profiles';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-other-user-profile-page',
  templateUrl: './other-user-profile-page.component.html',
  styleUrls: ['./other-user-profile-page.component.css']
})
export class OtherUserProfilePageComponent implements OnInit {

  constructor(private router: Router, public profileService: ProfileService) { }

  ngOnInit(): void {  }

  gotoIdeaPage()
  {
    this.router.navigate(['/idea-card']);
  }

}
