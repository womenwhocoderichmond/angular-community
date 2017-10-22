import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';

import { GitUser } from "app/shared/git-user.model";

@Injectable()
export class GitUserService {

  constructor(private http: HttpClient) { }

  getUserInfo(userName:string): Observable<GitUser>{
    let url = `https://api.github.com/users/${userName}`
    return this.http.get(url)
    .map((res:any) =>{
      let response = new GitUser();
      response.UserName = res.login;
      response.Name = res.name;
      response.NumberOfPublicRepos = res.public_repos;
      response.ImageUrl = res.avatar_url;
      return response;
    })
    .catch(error=> {
      console.error(error.message || error);
      return Observable.throw(error.message || error);
    });
    
  }

}
