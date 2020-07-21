import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-submit',
  templateUrl: './add-submit.component.html',
  styleUrls: ['./add-submit.component.css']
})
export class AddSubmitComponent implements OnInit {

  title:string;
  description:string;
  contact:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const profile = {
      title: this.title,
      description: this.description,
      contact:this.contact

    }
  }

}
