import { Injectable } from '@angular/core';

@Injectable()
export class CommunityService {
  private counter: number =0 ;
  constructor() {
    
    console.log("Community Service is created id: " +this.counter);
    
   }
   getCommunityDetails(){
     this.counter++;
     console.log("Community Service:Details "+ this.counter);
   }

}
