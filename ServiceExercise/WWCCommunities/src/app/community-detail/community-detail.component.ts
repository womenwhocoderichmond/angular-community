import { Component, OnInit, Input } from '@angular/core';
import { Community } from "app/shared/model/Community";

@Component({
  selector: 'app-community-detail',
  templateUrl: './community-detail.component.html',
  styleUrls: ['./community-detail.component.css']
})
export class CommunityDetailComponent implements OnInit {
  
  @Input()
  community: string;
  constructor() { }

  ngOnInit() {
    console.log("Details for "+ this.community);
  }

}
