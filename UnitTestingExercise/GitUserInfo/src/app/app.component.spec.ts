import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { Observable } from "rxjs/Rx";
import { GitUser } from "app/shared/git-user.model";
import { GitUserService } from "app/shared/git-user.service";
import { UsernameFormatService } from "app/shared/username-format.service";
import { FormsModule } from "@angular/forms";
import { NO_ERRORS_SCHEMA } from "@angular/core";

class MockGitUserService {
  getUserInfo(userName:string): Observable<GitUser>{
    let gitUser=new GitUser();
    return Observable.of(gitUser);
  }
}
class MockUsernameFormatService {
    getDisplayName(user:GitUser): string{
        return "";
    }
}
let gitUserService: GitUserService;
let userNameFormatService : UsernameFormatService;
/*****************************/
//UnComment first test. It will fail. Follow Step 1, 2 and 3 to setup AppComponent Test.
//Your first test should pass after these three steps
/*****************************/
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        //Step 2: App Component uses ngModel which is part of FormsModule. Import FormsModule
        declarations: [ AppComponent ],
        //Step 1: Add dependent Mock Services here.
        providers:[],
        //Step 3: Add NO_ERRORS_SCHEMA to ignore child component
        schemas:[]
    }).compileComponents();
    
  }));

//   it('should create the app', async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const component = fixture.debugElement.componentInstance;
//     expect(component).toBeTruthy();
//   }));


// Test title property is User Testing is Fun!
//   it(`should have as title 'app'`, async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const component = fixture.debugElement.componentInstance;
    
//   }));

//Test 'Unit Testing is Fun!' is rendered in h1 tag. Use querySelector
//   it('should render title in a h1 tag', async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//   }));

  //Test when button is cicked, it calles component's getInfo method. Use spyOn to spy on getInfo
//   it('should call getUserInfo when button is clicked', async(()=>{
//     const fixture = TestBed.createComponent(AppComponent);
//     const component = fixture.componentInstance;
//     //spy on component's getInfo method
//     spyOn(component, 'getInfo');

//     //get handle of buttin using fixture
    
//     //call click event on the button
  
//     fixture.whenStable().then(() => {
//         //verify getInfo is called
//     });
//   }))

  //Test it get information from service. 
  //This test is complete, make an obersvation on spyOn method
  //Disucss why we use callThrough();

//    it('should get user info from service', async(()=>{
//     const fixture = TestBed.createComponent(AppComponent);
//     const component = fixture.componentInstance;
//     let testUser:GitUser= new GitUser();
//     testUser.ImageUrl = "https://avatar.someImage.img";
//     testUser.Name = "Test User";
//     testUser.UserName = "testUser";
//     testUser.NumberOfPublicRepos = 5;
    
//     spyOn(gitUserService, 'getUserInfo').and.returnValue(testUser).and.callThrough();
//     component.gitUsers = [];
//     component.gitUserName ="testUser";
//     component.getInfo();
//     expect(gitUserService.getUserInfo).toHaveBeenCalledWith("testUser");
//     expect(component.isError).toBeFalsy();
//     expect(component.gitUsers.length).toBe(1);
//   }));


});
