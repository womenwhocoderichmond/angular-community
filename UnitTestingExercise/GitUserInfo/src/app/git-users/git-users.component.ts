import { Component, OnInit, Input } from '@angular/core';
import { GitUser } from "app/shared/git-user.model";

@Component({
  selector: 'app-git-users',
  templateUrl: './git-users.component.html',
  styleUrls: ['./git-users.component.css']
})
export class GitUsersComponent implements OnInit {

  @Input()
  gitUsers:Array<GitUser>=[]

  constructor() { }

  ngOnInit() {
  }

}
