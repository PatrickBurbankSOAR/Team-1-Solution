import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddIdeaService } from 'src/app/services/add-idea.service'


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

  constructor(private router: Router, private addideaservice: AddIdeaService) { }

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
    this.router.navigate(['/idea-card']);
  }

  gotoIdeaPage() {
    this.router.navigate(['/idea-card']);
  }
}
