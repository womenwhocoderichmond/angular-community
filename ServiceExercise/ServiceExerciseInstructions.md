
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
