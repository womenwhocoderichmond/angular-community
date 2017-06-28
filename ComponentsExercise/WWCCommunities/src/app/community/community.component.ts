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
  @Output()
  changedInterest = new EventEmitter();
  
  constructor() { }
  
  ngOnInit() {
    this.btnValue = "Add";
  }
  changeInterest(){
    this.changedInterest.emit(this.btnValue ==="Add" ? true : false);
    this.btnValue = this.btnValue =="Add" ? "Remove" : "Add";
  }
}
