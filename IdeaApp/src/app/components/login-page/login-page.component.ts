import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username:string = '';
  password:string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoSignUp() {
    this.router.navigate(['/register-page']);
  }

  login() {
    //Would be call to backend at some point
    console.log((this.username == "Wiz" && this.password == "p") ? "Success" : "Invalid credentials")

    if (this.username == "Wiz" && this.password == "p") {
      this.router.navigate(['/landing-page']);
    } else {
      this.username = this.password = '';
    }
  }
}
