import { Component, OnInit } from '@angular/core';
import { GitUserService } from "app/shared/git-user.service";
import { GitUser } from "app/shared/git-user.model";
import { UsernameFormatService } from "app/shared/username-format.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string = '';
  gitUserName:string;
  gitUsers:Array<GitUser>= [];
  isError:boolean = false;
  
  constructor(private gitUserService: GitUserService, 
    private userNameFormatService: UsernameFormatService,){
  }

  ngOnInit(): void {
    this.title = "Unit Testing is Fun!";
  }

  getInfo(){
    console.log("Get Info for "+ this.gitUserName);
    this.gitUserService.getUserInfo(this.gitUserName)
    .subscribe(result=>{
      this.isError = false;
      result.Name = this.userNameFormatService.getDisplayName(result); 
      this.gitUsers.push(result);
    },
    error=> {
      this.isError=true;
      console.log("Error while retriving user")
    });
  }
}
