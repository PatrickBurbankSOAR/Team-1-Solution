import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userProfilePic:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userProfilePic = 'assets/images/profilePicture.jpg'
  }

  gotoAddIdeaPage() {
    this.router.navigate(['/submit-idea-page']);
  }

  gotoProfilePage() {
    this.router.navigate(['/profile-page']);
  }

  signOut() {
    this.router.navigate(['/login-page']);
  }

}
