import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  
  name:string;
  email:string;
  phone:string;
  bio:string;
  password:string;

  constructor() { }

  ngOnInit(): void {
    
   
  }

}
