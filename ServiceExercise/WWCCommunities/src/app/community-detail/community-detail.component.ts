import { Component, OnInit, Input } from '@angular/core';
import { Community } from "app/shared/community.model";

@Component({
  selector: 'app-community-detail',
  templateUrl: './community-detail.component.html',
  styleUrls: ['./community-detail.component.css']
})
export class CommunityDetailComponent implements OnInit, OnChanges {
  
  @Input()
  community: Community;
  constructor() { }

  ngOnInit() {
    console.log("Details for "+ this.community.name);
  }
  ngOnChanges(){}
}
