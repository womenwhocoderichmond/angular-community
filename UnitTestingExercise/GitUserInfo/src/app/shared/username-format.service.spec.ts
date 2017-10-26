import { TestBed, inject } from '@angular/core/testing';

import { UsernameFormatService } from './username-format.service';
import { GitUser } from "app/shared/git-user.model";

//Isolated Unit Test without using Angular Testing utilities
/*****************************/
// EXERCISE:
//1. Create a variable service of type UsernameFormatService
//2. Initialize 'service' in beforeEach function
//3. In first test make a call to service's getDisplayName function with gitUser as parameter and verify value of result
//4. Create another test and test the else condition in getDisplayName function 

/****************************/

describe('UsernameFormatService Isolated', ()=>{
   //replace this comment with Exercise step 1
  beforeEach(()=>{
   //replace this comment with Exercise step 2
  })
  
  it("returns Name when name is defined", ()=>{
    let gitUser = new GitUser();
    gitUser.Name = "Test User";
    gitUser.UserName = "testUserName";
    //replace this comment with Exercise step 3
  })
  
  //replace this comment with Exercise step 4
})

//UsernameFormatService Test as provided by Angular CLI
describe('UsernameFormatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsernameFormatService]
    });
  });

  it('should be created', inject([UsernameFormatService], (service: UsernameFormatService) => {
    expect(service).toBeTruthy();
  }));

});
