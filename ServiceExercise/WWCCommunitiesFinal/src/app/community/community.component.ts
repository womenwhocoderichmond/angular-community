import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommunityService } from "app/shared/service/community.service";

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
 // providers:[CommunityService]
  
})
export class CommunityComponent implements OnInit {
  @Input()
  name:string;
  private btnValue:string;
  
  constructor(private communityService: CommunityService) { }
  
  ngOnInit() {
    this.btnValue = "Add";
    this.communityService.getCommunityDetails();
  }
  changeInterest(){
    this.btnValue = this.btnValue =="Add" ? "Remove" : "Add";
    event.stopPropagation();
  }
}
