import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  @Input()
  name:string;
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
