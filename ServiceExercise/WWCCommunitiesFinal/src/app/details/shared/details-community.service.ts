import { Injectable } from '@angular/core';
import { CommunityService } from "app/shared/service/community.service";

@Injectable()
export class DetailsCommunityService {

  constructor() { 
    console.log("Details community Service created");
  }

  
  getCommunityDetails(){
    console.log("Detail Community Service: Details");
  }


}
