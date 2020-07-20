import { Component, OnInit } from '@angular/core';
import { Profile } from '../../Models/Profile-Info'
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  
  profiles:Profile[];

  constructor() { }

  ngOnInit(): void {
    
  }

}
