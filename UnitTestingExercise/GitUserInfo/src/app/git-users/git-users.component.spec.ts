import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitUsersComponent } from './git-users.component';
import { GitUser } from "app/shared/git-user.model";

describe('GitUsersComponent', () => {
  let component: GitUsersComponent;
  let fixture: ComponentFixture<GitUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  
  //[Component Testing]: Test rendered html and values
  //notice async: there are some asynchronous operations in this test.
  it('should render images with src', async(() => {
    let users = []
    let testUser:GitUser= new GitUser();
    testUser.ImageUrl = "https://avatar.someImage.img";
    testUser.Name = "Test User";
    testUser.UserName = "testUser";
    testUser.NumberOfPublicRepos = 5;
    users = [...users,testUser];
    
    component.gitUsers = users;
    fixture.detectChanges(); //this triggers Change Detection
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').src).toContain('https://avatar.someimage.img/');
  }));

  

  it("should render multiple user information", async(()=>{
    let users = []
    let testUser1:GitUser= new GitUser();
    testUser1.ImageUrl = "https://avatar.someImage.img";
    testUser1.Name = "First TestUser";
    testUser1.UserName = "testUser1";
    testUser1.NumberOfPublicRepos = 5;

    let testUser2:GitUser= new GitUser();
    testUser2.ImageUrl = "https://avatar.someOtherImage.img";
    testUser2.Name = "SecondTest User";
    testUser2.UserName = "testUser2";
    testUser2.NumberOfPublicRepos = 3;

    users = [...users,testUser1,testUser2];
    
    /*****************************/
    // EXERCISE:
    //1. Assign 'users' to component's gitUsers property
    //2. Make sure to trigger changeDetection 
    //3. Get compiled template of nativeElements
    //4. user querySelectorAll('img') to get list of all img tags
    //5. verify length of img tags is 2
    /****************************/
    
  }));


});