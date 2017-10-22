import { Component, OnInit, Input } from '@angular/core';

import { CommunityService } from "app/shared/service/community.service";
import { DetailsCommunityService } from "app/details/shared/details-community.service";
import { communityServiceFactory } from "app/shared/service/community.service.factory";

@Component({
  selector: 'app-community-detail',
  templateUrl: './community-detail.component.html',
  styleUrls: ['./community-detail.component.css'],
  providers:[
    { provide: Number, useValue: 10 },
    CommunityService]
   // {provide: CommunityService, useFactory: communityServiceFactory}],
  
})
export class CommunityDetailComponent implements OnInit {
  
  @Input()
  community: string;
  constructor(private communityService: CommunityService) { }

  ngOnInit() {
    this.communityService.getCommunityDetails();
    console.log("Details for "+ this.community);
  }

}
