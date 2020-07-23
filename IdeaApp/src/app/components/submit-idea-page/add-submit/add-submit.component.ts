import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddIdeaService } from 'src/app/services/add-idea.service'
import { Card } from 'src/app/Models/card-info';
import { CardServiceService } from 'src/app/services/card-service.service';
import { ProfileCreationService } from 'src/app/services/profile-creation.service';


@Component({
  selector: 'app-add-submit',
  templateUrl: './add-submit.component.html',
  styleUrls: ['./add-submit.component.css'],
  
})
export class AddSubmitComponent implements OnInit {
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png",
    maxSize: "1",
    uploadAPI:  {

    //Would be directed to the backend if we had one
    //   url:"https://example-file-upload-api",
    //   method:"POST",
    //   headers: {
    //  "Content-Type" : "text/plain;charset=UTF-8",
    //   "Authorization" : `Bearer ${token}`
    //  },
      params: {
        'page': '1'
      },
      responseType: 'blob',
    },
    theme: "dragNDrop",
    hideProgressBar: true,
    hideResetBtn: false,
    hideSelectBtn: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
};
  title: string;
  description: string;
  tags: string[];
  timestamp: Date = new Date();
  public length:number = 0;

  constructor(private router: Router, private addideaservice: AddIdeaService,  public cardservice: CardServiceService, public profilecreationservice: ProfileCreationService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    var tempCard = new Card;
    tempCard.title = this.title;
    tempCard.description = this.description; 
    tempCard.tags = this.tags;
    tempCard.picture = "assets/images/finance.jpg";
    
    this.profilecreationservice.myIdeaCards(tempCard);

    this.addideaservice.saveIdea(this.title);

    //console.log("Successfully submitted ", this.timestamp, tempCard.title, this.description, tempCard.tags);

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
