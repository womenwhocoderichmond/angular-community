import { Component, OnInit } from '@angular/core';
import { GitUserService } from "app/shared/git-user.service";
import { GitUser } from "app/shared/git-user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string = '';
  gitUserName:string;
  gitUserInfo: GitUser;
  gitUsers:Array<GitUser>= [];
  isError:boolean = false;
  
  constructor(private gitUserService: GitUserService){
  }

  ngOnInit(): void {
    this.title = "Unit Testing is Fun!";
    this.gitUserInfo = new GitUser();
  }

  getInfo(){
    console.log("Get Info for "+ this.gitUserName);
    this.gitUserService.getUserInfo(this.gitUserName)
    .subscribe(result=>{
      this.gitUserInfo =result;
      this.isError = false;
      this.gitUserInfo.Name = this.gitUserInfo.Name == undefined || this.gitUserInfo.Name == "" ? 
        this.gitUserInfo.UserName : this.gitUserInfo.Name;
      this.gitUsers.push(this.gitUserInfo);
    },
    error=> {
      this.isError=true;
      console.log("Error while retriving user")
    });
  }
}
