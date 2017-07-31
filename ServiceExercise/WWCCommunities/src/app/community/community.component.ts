import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from "app/shared/person.model";

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  @Input()
  public name:string;
  @Input()
  public communityId:number;
  @Input()
  public leaderId:string;

  private btnValue:string;
  
  constructor() { }
  
  ngOnInit() {
    this.btnValue = "Add";
  }
  changeInterest(){
    this.btnValue = this.btnValue =="Add" ? "Remove" : "Add";
    event.stopPropagation();
  }
}
