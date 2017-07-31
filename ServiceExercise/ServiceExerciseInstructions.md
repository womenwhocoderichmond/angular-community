
## Step-By-Step Service Exercise
* Clone or Download WWCCommunities project.
* Run following command.
    ```
    npm install
    ng serve
    
    ```
  * Application is listing Women Who Code Communities. Cliking on any communities provide details about it.
  * Currently all the information about the communities displayed in the application is loaded in AppComponent in app.component.ts file. We want this information to come from Angular service. Ideally, service will make a http call to get this information, however, for this exericse we are going to hard-code this information.

### Create a service
* We will use Angular Cli to create a service. Run following command in the terminal window
```
ng g service /shared/community
```

* This will create two files for use in app/shared directory.
  community.service.ts
  community.service.spec.ts
  
* Open community.service.ts file and add following import statemnet
```
import { Community } from "app/shared/community.model";
import * as CommunityDetails from "app/shared/community-details";
import { Person } from "app/shared/person.model";
```
* Add a property to CommunityService class to hold our communities

```
private communities : Community[]
```
* Add a private function loadCommunities. 
```Typescript
private loadCommunities(){
    let angular = new Community(1,"Angular", CommunityDetails.angularCommunityDetails);
    angular.leader = new Person("Shradha Kaldate", "shradha.kaldate@gmail.com")
   
    let frontEnd = new Community(2,"Front End", CommunityDetails.frontEndCommunityDetails);
    frontEnd.leader = new Person("Liz Swain","liz@frontEndWiz.com");
    
    let cleanCode = new Community(3,"Clean Code", CommunityDetails.cleanCodeCommunityDetails);
    
    let algorithm = new Community(4,"Algorithms", CommunityDetails.algorithmsCommunityDetails);
    algorithm.leader = new Person("Rachel Dorn", "algorithm_gal@coder.com");
   
    let java = new Community(5, "Java", CommunityDetails.javaCommunityDetails);
    java.leader = new Person("Debra Duke", "theProfessor@vcu.com");
   
    return [angular,frontEnd,algorithm,cleanCode,java ];
  }

```

* In constructor call loadCommunities function to populate our communities property
  ```Typescript
  constructor() { 
    this.communities = this.loadCommunities();
    console.log("CommunityService created");
  }
  ```
  
 * Add a public function, that users of this service can use to get communities;
 ```Typescript
 public getCommunities():Community[]{
    return this.communities;
 }
 ```
 
 * For now our CommunityService is just a plain class. Angular doesn't know it is suppose to treat this class as a service. 
To do that, we need to tell it somewhere that it is a service. There are lot of possibilites where we can tell Angular about it, for now, lets do it in a root component.

* Update app.component.ts file. Add import statement and replace the Component decorator with following code. Notic the **providers** property in Compoment decorator. 

```Typescript
import { CommunityService } from "app/shared/community.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CommunityService]
})
```

* We now have provided CommunityService, Angular now knows that it is a service. It is now ready for Dependency Injection, in AppComponent and its child component.

* Run your application and check Console tab in developer tool of the browser. The console.log statement in the constructor of CommunityService is not there yet. It means Angular has not created the instance of CommunityService yet. 

* Add a constructor function to app.componet.ts file. In a constructor function pass communityService as a parameter. When this component is created, Angular will pass in communityService instance to it.
```Typescript
constructor(private communityService: CommunityService){
}
```
* Run your application and check Console tab in developer tool of the browser. You will see the console.log statement from CommunityService constructor now. Angular will not create the instance of the service unless it is injected. Once the instance of the service is created, it lasts for the lifetime on an application. Unlike Components, services doesn't get destroyed.

* Replace content on ngOnInit with following code in AppComponent in app.component.ts file
```Typescript
this.communities = this.communityService.getCommunities();
this.selectedCommunity = this.communities[0];
```

* Check in the browser. Result looks the same, but we are now getting communities from CommunityService. 

### Service is a Singelton

* Services are singelton, i.e only one instance of it is available and it lasts the application
lifetime. If one of component make changes the state of the service, other component making use of same service can get that information. 

(Most of the time services are intended to be singelton. It is possible to create more than one instance of it. If creating more than once instance of service was unintentional, it can cause some bugs in your application that are hard to find. We will discuss how more than one instance of a service is created in next section.)

* To demostrate singelton behavior of a service let's following functionality
    When user clicks "Add" button in community component, it should show "You are a memeber" in community-details component. 
  
* Modify community.service.ts file. Add a public property to hold selectedCommnuity and initialize it in a constructor
    ```Typescript
    public selectedCommunity: Community
    
    constructor(){
        this.communities = this.loadCommunitities();
        this.selectedCommunity = this.communities[0];
    }
    
    ```
 *  Add following two functions to CommunityServicej
 ``` Typescript
 updateMembership(id:number, isMember:boolean):void{
    let index = this.communities.findIndex(x=>x.id == id);
    this.communities[index].isCurrentUserMember = isMember;
  }

  updateSelectedCommunity(id: number) : void{
    let index = this.communities.findIndex(x=>x.id == id);
    this.selectedCommunity = this.communities[index];
  }

 ```
 *  In app.component.ts file, use communityService to initialize selectedCommunity. Update OnInit function modify the line that initialize selectedCommunity 
 
 ``` Typescript
    this.selectedCommunity = this.communityService.selectedCommunity;
 ```
 * In app.component.ts, update showDetails function with following code
 
 ```Typescript
    this.communityService.updateSelectedCommunity(item.id);
    this.selectedCommunity = this.communityService.selectedCommunity;
 ```
 
 * Use CommnuityService to update currentUserMembership information for a community in CommunityComponent. Update community.component.ts file. Add a import statement and inject CommunityService in a constructor
 
 ```Typescript
    import { CommunityService } from "app/shared/community.service";
    
    constructor(private communityService: CommunityService) { }
 ```
 
 * Add following code to changeInterest method community.component.ts file. We are calling updateMembership
and passing in communityId to update and value of currentMembership.

 ```Typescript
    this.communityService.updateMembership(this.communityId,this.btnValue=="Remove");
 
 ```
 
 * In community-details.component.html file, add following tag
 
 ```
    <h6 *ngIf="community.isCurrentUserMember">You are a member</h6>
 ```
 
 * Run the application. When you click "Add", you should see "You are a member" message displayed on community-details.component. We
 are setting this information in CommunityComponent using updateMembership method of ComponentService. AppComponent gets that information when it retrives selectedCommunity from ComponentService and passes it to CommunityDetails component. Services being signelton are really helpful when there is a multipage application. Information set by component on one page can be accessed by component on next page, even when component on first page is destroyed.
 
 

### Dependency Injection Scope

* Let's add another feature to our application.
    Display name of community leader in Community Details page.
    
* Create another service named PersonService, that will handle creating a Person object and providing person information. Use following command in terminal to create a service

```
   ng g service /shared/person 
```

* Update newly created PersonService class in person.service.ts file. Add persons property

```
    private person : Person[]
```
* In the constructor of PersonService, initialize persons property

```Typescript
    constructor() {
      this.persons = [
      new Person("Shradha Kaldate", "shradha.kaldate@gmail.com"),
      new Person("Liz Swain","liz@frontEndWiz.com"),
      new Person("Rachel Dorn", "algorithm_gal@coder.com"),
      new Person("Debra Duke", "theProfessor@vcu.com")
     ];
    }

```

* Add getPerson method to PersonService to return requested person
```
  getPerson(id:number):Person{
    return this.persons[id];
  }

``` 

* Since we are going to use this service only on CommunityDetails (atleast for now), lets provide it CommunityDetailsComponent. Update
Component decorator in community-details.component.ts file

```Typescript
@Component({
  selector: 'app-community-detail',
  templateUrl: './community-detail.component.html',
  styleUrls: ['./community-detail.component.css'],
  providers:[PersonService]
})


```

* Update community-details.component.ts file. Add a property leader to hold leader information.

    ```
    private leader: Person;
    ```

* Inject PersonService in a constructor of CommunityDetailsComponent

    ```
    constructor(private personService:PersonService) { }
    ```

* Update ngOnChanges function with following line. Whenever, selectedCommunity is changed and changed selectedCommunity is passed down to CommunityDetails component, it will run ngOnChanges method and get Person information from PersonService

    ```
    this.leader = this.personService.getPerson(this.community.leaderId);
    ```
* Check your application in the browser. YOu should see, community leader name in Community Details 

* Now let's say we want to display person's email in CommunityComponent. PersonService provides email, so lets try to use it in CommunityComponent. 

* Update community.component.ts file to inject PersonService in CommunityComponent class

```
    constructor(private communityService: CommunityService, private personService: PersonService) { }
```

* Check your application in browser. You will see error in console.
We got this because PersonService was provided in CommunityDetailsComponent and CommunityDetailsComponent is not a parent of CommunityComponent. Also notice that we got runtime error not compile time, this suggestes that all dependency injection is happening at
runtime and not at compile time.

* Let's fix our error. To make this work, we have to provide the service at parent level i.e AppComponent. 

* Update app.component.ts file. Add PersonService to this of providers

```Typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CommunityService, PersonService] 
  
})

```
* Update person.service.ts to add console.log statement to PersonService constructor.

```Typescript
    console.log("Person Service Created ");
```

* Update community.component.ts file. Add a property to hold email
```Typescript
    private leaderEmail: string;
```

* Update ngOnInit function in community.component.ts to get leader's email from PersonService

```
let leader = this.personService.getPerson(this.leaderId);
this.leaderEmail = leader != null ? leader.email : "";

```

* Add tag in community.component.html file to display the email

```
<div class="info">
     {{leaderEmail}}
</div>
```
 

* Run your application and check the log in developer tool of the browser. You should see "Person Service Created" message twice. There are now two instances of PersonService. One because we provided at AppComponent and another becuase we provided it in CommunityDetailsComponent. Changes made to once instance is not availbale to othe instance. This is not what we intended. Can you think of a scenario where you need different instance of a service ? 

* Remove the providers line from CommunityDetailsComponent decorator in commmunity-details.component.ts file.


```
@Component({
  selector: 'app-community-detail',
  templateUrl: './community-detail.component.html',
  styleUrls: ['./community-detail.component.css'],
  /*providers:[PersonService]*/
})

```

* Run your application and you should see PersonService is created only once.

* You can also provide a service in @NgModule. That is acutally the recommended way. Discuss with other memebers
    - What is the difference between providing service at root level component vs providing it in @NgModule
    

### Overriding a service instance in child component

* Suppose we want to have another version of PersonService, for example a service that get persons details from meetup group and we want to use that version of a service in one instance.

* Create another service named PersonMeetup, that supposedly gets information from Meetup API.

```
ng g service /shared/person-meetup
```
* Update newly created PersonMeetup class in person-meetup.service.ts file. Add persons property

```
    private person : Person[]
```
* In the constructor of PersonMeetupService, initialize persons property

```Typescript
   constructor() {
      this.persons = [new Person("SKMeetup", "shradha.kaldate@meetup.com"),
      new Person("LSMeetup","liz@meetup.com"),
      new Person("RDMeetup", "algorithm_gal@meetup.com"),
      new Person("DDMeetup", "theProfessor@meetup.com")
     ];
   }


```

* Add getPerson method to PersonMeetupService to return requested person
```
   getPerson(id:number):Person{
    return this.persons[id];
  }
  ```
 Notice that the public members should match the service you are trying to override. 
 
* In CommunityDetails we want to show meetup id instead of name. We want to override personService provided by parent component in CommunityDetailsComponent. We do that by adding following providers in Component decorator of CommunityDetailsComponent

```
@Component({
  selector: 'app-community-detail',
  templateUrl: './community-detail.component.html',
  styleUrls: ['./community-detail.component.css'],
  providers:[{provide: PersonService, useClass:MeetupPersonService}]
})

```
* Notice the providers propery is different now. We are passing it an object specifying the name of the service to provide and class to use to instantiate that service.

* Run your application. You should see meetupId for leaders in CommunityDetails page.

### @Injectable()

* You might have noticed that every time we create a service @Injector() decorator is added to
the class. 

* Try removing this decorator in CommunityService and see if there is any difference. You will see no difference. 

* @Injectable() is to tell Angular that this class might have dependency that needs to be injected. 

* For demonstration, let's say our CommunityService is dependent on PersonService. Lets try injecting it in CommunityService constuctor

```
constructor(private personService : PersonService) { }
```

* Now if you remove @Injectable() from CommunityService, it will throw an error. Though @Injectable is needed only when you are injecting a dependecny in a service, Angular community recommends adding it to service all the time.

### Factory Patter VS Singelton

* You can use factory pattern to generate service object. Facotry pattern gives you more control over how you generate an instance of a service. 

* Create a new file under /app/shared directory named community.service.factory.ts. Add following code to the file. It is a functiopn that creates a new object of the CommunityService.

``` Typescript
import { PersonService } from "app/shared/person.service";
import { CommunityService } from "app/shared/community.service";

export const communityServiceFactory = (personService: PersonService) =>{
    console.log("Using CommunityServiceFactory to create CommunityService instance");
    return new CommunityService(personService);
}

```
* To use the factoryPattern update providers in AppComponent with following code. **useFactory** will hold name of function that is used to create a factory. deps array hold any dependecies that CommunityService has.

```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PersonService,{provide:CommunityService, useFactory: communityServiceFactory, deps:[PersonService] }]
})

```

* Now if you run your application, you will see log statement "Using CommunityServiceFactory to create CommunityService instance".

* Update CommunityDetailsComponent decoratoer with following code. We are providing another instance of CommunityService to CommunityDetailsComponent
```
@Component({
  selector: 'app-community-detail',
  templateUrl: './community-detail.component.html',
  styleUrls: ['./community-detail.component.css'],
  providers:[{provide: PersonService, useClass:MeetupPersonService},
    {provide:CommunityService, useFactory: communityServiceFactory, deps:[PersonService] }
  ]
})

```

* Since CommunityDetailsComponent is using a MeetupPersonService as PersonService, our community.service.factory will use * MeetupPersonService to create new CommunityService object
  
* Add following console.log statement in CommunityService constructor to see it working. 
console.log(this.personService.getPerson(0).name);

### Recap ###
* Services are singelton.
* It is created only when it is used (i.e. when it is inejcted)
* They way Angualr knows about the service is when we provide it using "providers" property in a decorator
* When a service is provided at component level, that component and its child can use that service using Dependency injection
* A new instance of service is created whenever you provide it at different levels in component tree. 
* You can provide differnet versions of the service, by using "useClass" property in providers.
* @Injectable is used to tell Angular that a class may have dependency that needs to be injected at runtime.
* YOu can use Factory Pattern to create instance of service using "useFactory" property in providers.











