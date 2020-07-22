import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  constructor() { }

  private array = [];

save(array) {
    this.array = array;
}

fetch() {
  
    return this.array;
}
}
