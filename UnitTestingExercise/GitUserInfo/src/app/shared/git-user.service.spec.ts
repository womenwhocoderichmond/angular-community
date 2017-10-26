import { TestBed, inject } from '@angular/core/testing';
import { Http, XHRBackend, ConnectionBackend, RequestOptions, Response, ResponseOptions, HttpModule, RequestMethod } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { GitUserService } from './git-user.service';

//Resolve Dependencies
//Import HttpModule to TestBed
//Provide MockBackend so that it will not make actual HTTP Call

describe('GitUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        providers:[
          GitUserService, 
        ]
    });
   
  });

  //[SERVICE: TEST 1]: testing service can be generated and injected
  // it('should be created', inject([GitUserService, XHRBackend], (service: GitUserService, mockBackend:MockBackend) => {
  //   expect(service).toBeTruthy();
  // }));

  //[SERVICE: TEST 2]: testing service with mock backend call
  // it('should return a user', inject([GitUserService, XHRBackend], (service: GitUserService, mockBackEnd:MockBackend) => {
  //   let testUser = {
  //     login:"testUser",
  //     avatar_url: "https://avatar.someImage.img",
  //     name: "Test User",
  //     public_repos:5
  //   };
  //   //setup mockBackEnd to respond with mock data
    
    
  //   //call a method to service and verify mock data is received
    

  // }));

  //[SERVICE: TEST 3]:testing error response thrown by mock http call
  //using spyOn to verify method is called
  // it('should throw an exception', inject([GitUserService, XHRBackend], (service: GitUserService, mockBackEnd:MockBackend) => {
    
  //   //setup mockBackEnd to respond with Error
    
  //   //verify service call to getUserInfo throws error
    

  // }));

  // //[SERVICE: TEST 4]: testing request that has been passed to MockHttp
  // it('should request GET action for username', inject([GitUserService, XHRBackend], (service: GitUserService, mockBackEnd:MockBackend) => {
  //   let testUser = {
  //     login:"testUser",
  //     avatar_url: "https://avatar.someImage.img",
  //     name: "Test User",
  //     public_repos:5
  //   };
  //   //setup mock connection and verify the url and request method being passed in

  //   //make service call to trigger the http request

  // }));
    
});
