import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-submit',
  templateUrl: './add-submit.component.html',
  styleUrls: ['./add-submit.component.css']
})
export class AddSubmitComponent implements OnInit {

  title:string;
  description:string;
  tags:string[];
  timestamp:Date = new Date();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Successfully submitted " + this.timestamp);
    // const profile = {
    //   title: this.title,
    //   description: this.description,
    //   tags:this.contact

    // }

    //Clear form
    this.title = this.description = '';
    this.tags = [];
    this.router.navigate(['/idea-card']);
  }

  gotoIdeaPage() {
    this.router.navigate(['/idea-card']);
  }
}
