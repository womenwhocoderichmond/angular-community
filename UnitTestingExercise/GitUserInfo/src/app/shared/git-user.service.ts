import { Injectable } from '@angular/core';

import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';

import { GitUser } from "app/shared/git-user.model";

@Injectable()
export class GitUserService {

  constructor(private http: Http) { }

  getUserInfo(userName:string): Observable<GitUser>{
    let url = `https://api.github.com/users/${userName}`
    return this.http.get(url)
    .map((res:Response) =>{
      let response = res.json();
      let gitUser = new GitUser();
      gitUser.Name = response.name;
      gitUser.UserName = response.login;
      gitUser.NumberOfPublicRepos = response.public_repos;
      gitUser.ImageUrl = response.avatar_url;
      return gitUser;
    })
    .catch(error=> {
      console.error(error.message || error);
      return Observable.throw(error.message || error);
    });
  }
}
