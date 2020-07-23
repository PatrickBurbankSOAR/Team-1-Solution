import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddIdeaService } from 'src/app/services/add-idea.service'
import { CardServiceService } from 'src/app/services/card-service.service';


@Component({
  selector: 'app-add-submit',
  templateUrl: './add-submit.component.html',
  styleUrls: ['./add-submit.component.css']
})
export class AddSubmitComponent implements OnInit {

  title: string;
  description: string;
  tags: string[];
  timestamp: Date = new Date();
  public length:number = 0;

  constructor(private router: Router, private addideaservice: AddIdeaService,  public cardservice: CardServiceService) { }

  ngOnInit(): void {
  }

  onSubmit() {


    this.addideaservice.saveIdea(this.title);

    console.log("Successfully submitted " + this.timestamp);
    // const profile = {
    //   title: this.title,
    //   description: this.description,
    //   tags:this.contact

    // }

    //Clear form
    this.title = this.description = '';
    this.tags = [];
    //ADD new card here 
    this.router.navigate(['/idea-card']);
  }

  
  outOfCards(){
    this.router.navigate(['/out-of-cards']);
  }

  gotoIdeaPage() {

    this.length = this.cardservice.cards.length;
    if (this.length > 1) {
      this.router.navigate(['/idea-card'])
    }
    else {
        //console.log("End of array");
        this.outOfCards()
    }
  }
}
