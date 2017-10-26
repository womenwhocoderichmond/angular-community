import { Injectable } from '@angular/core';
import { GitUser } from "app/shared/git-user.model";

@Injectable()
export class UsernameFormatService {

  constructor() { }

  getDisplayName(gitUser:GitUser){
    return gitUser.Name == undefined || gitUser.Name == "" ? 
        gitUser.UserName : gitUser.Name;
  }

}
