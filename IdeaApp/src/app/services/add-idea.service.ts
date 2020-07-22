import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddIdeaService {

  constructor() {}

  private ideaTitle;

  saveIdea(ideaTitle) {

    this.ideaTitle = ideaTitle;

  }

  fetchIdea() {

    return this.ideaTitle;
  }

}
