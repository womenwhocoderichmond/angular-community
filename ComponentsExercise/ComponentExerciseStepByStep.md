# Step By Step Guide for Component Exercise

* Follow Angular Setup Instruction to get project setup.
* Update app-component.html
  * Remove existing code. Add following code.
  ```
  <div class="wwc-container">
    <h1>Women Who Code</h1>
  </div>
  ```
  * Add style to app.component.css to style the header.
```css
.wwc-container {
    background-color: #1abc9c;
    color: #5f5f5f;
    height: 150px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 60px;
    font-size: 35pt;
}
```
## Adding new component
* Generate new component named ‘Community’ using Angular CLI. In command prompt run following command
```
ng generate component Community
```
 Notice that in addition to new files created in directory named ‘Community’, Angular CLI has also updated your app.module.ts file. Check out this file and see what’s updated
* Update community.component.html file
  * Remove existing ```<p>``` tag and add a ```<div>``` tag with text “Angular Community”
  ```html
  <div>Angular Community</div>
  ```
* Update app.component.html file to add tag <app-community>. 
```html
<app-community></app-community>
```
Notice that in community.component.ts file, in @Component decorator the selector is specified as 'app-community'. That's how angular ties ```<app-community>``` tag to our CommunityComponent.

__Checkpoint: Your application should display Angular Community__
Optional: add some css to community.component.css to add some broder and margins.

## Bind the data from component to template

Update community.component.html and community.component.ts files so that name of the community is set using property of CommmunityComponent Class.

* Add a public property named “name” in CommunityComponent Class 
```Typescript
name:string;
```
* In ngOnInit function, set the value of name property to "Angular Community"
```Typescript
ngOnInit() {
    this.name = "Angular Community";
  }
```
* Use name property in community.component.html file to display the name of the component
```html
<div>{{name}}</div>
```
![alt text](https://github.com/skaldate/angular-community/blob/master/ComponentsExercise/assets/think.png "Think") __What is the difference between contructor and ngOnInit ?__

## Passing data from parent component

So far our CommunityComponent class is very specific. Every consumer of this component will always get "Angular Community". We want comsumer of this component (i.e. parent component) to decide what kind of community they want. That means parent component has to pass the name of the community to CommunityComponent.

* Modify community.component.ts file to add @Input() decorator to the name property. @Input() decorator tells Angular that our component expects the property "name" to be passed in. You will also need to import Input from @angular/core. 

```Typescript
import { Component, OnInit, Input } from '@angular/core';
``` 

```Typescript
@Input()
name:string;
```
* Remove initialization of name property in ngOnInit() function in community.component.ts
```Typescript
ngOnInit() {
    
  }
```
* Modify app.component.html to update ```<app-community>``` tag
```html
<app-community name="Angular Community"></app-community>
```
__Checkpoint: You should still see same webpage. Modify name property in the app-community tag and see the difference in the browser.__

* Let's quickly add few more communities. Modify app.component.html to add few more ```<app-communitiy>``` tags

```html
<app-community name="Angular Community"></app-community>
<app-community name="FrontEnd Community"></app-community>
<app-community name="Clean Code Community"></app-community>
<app-community name="Algorithm Community"></app-community>
```

## Use In-built directives *ngFor

Angular provides *ngFor directive to iterate over list and repeatedly display an element. Let's use it to display ```<app-communities>``` tags based on the list of communities we provide.

* Modify AppComponent class in app.component.ts file to add property named 'communities' and initialize in ngOnInit function.
You will need to import OnInit from @angular/core

```Typescript
import { Component, OnInit } from '@angular/core';
```

```Typescript
export class AppComponent implements OnInit {
  public communities : string[];
  ngOnInit() {
    this.communities = ["Angular","Front End","Algorithms","Clean Code","Java"];
  }
}
```
* Modify app.component.html. Replace all ```<app-communitiy>``` tags with following code

```html
<app-community *ngFor="let name of communities" name="{{name}}"></app-community>
```

![alt text](https://github.com/skaldate/angular-community/blob/master/ComponentsExercise/assets/think.png "Think") 
__Does the "communities" property in AppComponent has to be 'public'?__

__Will it work if we change it to 'private'?__

__Try changing it to private. Make right choice for accessor__



## Property Binding 

So far we have been displaying the values using {{}} syntax. This is called <i>interpolation</i>. Value inside {{ }} is calculated and results are displayed. Now let's try different way called <i>property binding</i>. 
* Update <app-community> tag in app.component.html file 

```html
 <app-community *ngFor="let name of communities" [name]="name"<app-community>
```

![alt text](https://github.com/skaldate/angular-community/blob/master/ComponentsExercise/assets/think.png "Think") 
__If interpolation {{}} and property binding [] has same result, what is the preferred way?__ 

__Are there situations when one or the other works/preferred?__

## Event Binding
We have bind the property from our component classes to the html tags using either interpolation or property binding. Now let's try to implement event binding, i.e. functions that runs when some event happen. We will add a button and write a function that will run when the button is clicked.

* Modify community.component.html to add a button

```html
<div>
    {{name}}
    <input type="button" [value]="btnValue" (click)="changeInterest()" />
</div>
```
* Modify community.component.ts to add the property btnValue that will provide value to the button and method changeInterest that will run when button is clicked.

```Typescript
private btnValue:string;
```

```Typescript
ngOnInit() {
    this.btnValue = "Add";
  }
changeInterest(){
    this.btnValue = this.btnValue =="Add" ? "Remove" : "Add"; 
}
```
__Checkpoint: Clicking button should change the text on the button.__

## Use Model to hold data

Our community now holds more than one form of information, its name and if current user is interested in it or not. It is a good idea to create a class that will encapsulate this information. We will add Community class and use array of Community objects instead of Array of string.

* Add new folder "shared" in "app" folder. Add another folder "model" in "shared" folder. Your folder structure should look like

```
/app/shared/model/
```
* Add a new file named Community.ts in model folder. Add following code to Community.ts

```Typescript
export class Community {
    isAcive:boolean;
    memberInterested: boolean;
    constructor(public id:number,public name:string){
    }
}
```
* Modify app.component to use Community Class. Update property communities to be an Array of Community. Update ngOnInit function to initialize this array. 

Since you are using Communities class in AppComponent, you will need to import it.

```Typescript
import { Community } from "app/shared/model/Community";
```

```Typescript
export class AppComponent implements OnInit {
  
  private communities : Community[];
   ngOnInit(){
     this.communities = [
       new Community(1,"Angular"),
       new Community(2,"Front End"),
       new Community(3,"Clean Code"),
       new Community(4,"Algorithms")
     ];
   }

}

```
* Update ```<app-community>``` tag in app.component.html. 
```html
<div *ngFor="let community of communities">
       <app-community [name]="community.name"></app-community>
 </div>

```

## Pass an Event from child component to parent component

So far there is only one way of communication between parent and child. Parent (AppComponent) is sending data to child component (CommunityComponent) and child component is displaying it. Now let’s try the communication from child to parent. Child component talk to parent by emitting events. We emit event to parent using @Output() decorator. 

* Add changedInterest property to community.component.ts and decorate it as @Ouptput() event.
You will need to import Output and EventEmitter from @angular/core

```Typescript
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
```

```Typescript
@Output()
changedInterest = new EventEmitter();
```
* Modify changedInterest() method in community.component.ts to emit changedInterest event

```Typescript
changeInterest(){
    this.changedInterest.emit(this.btnValue ==="Add" ? true : false);
    this.btnValue = this.btnValue =="Add" ? "Remove" : "Add";
  }
```

* Modify ```<app-community>``` tag in app.component.html file to capture the changedInterest event and specify event handler. Here ```$event``` will capure whatever data the child component has passed.

```html
<app-community [name]="community.name" (changedInterest)="updateInterest($event, community)"></app-community>
```

* Modify app.component.ts to add updateInterest function.

```Typescript
updateInterest(event, item){
      item.memberInterested = event;
}
```
* Let's add some css class based on memberInterested propery, so that we can see these changes visually. Angular provides directive called ngClass where we can add css classes conditionally. Modify ```<div>``` tag with *ngFor in app.component.html

```html
<div *ngFor="let community of communities" [ngClass]="{'interested':community.memberInterested, 'notInterested':!community.memberInterested}">
```

* Modify app.component.css to add these two classes

```css
.interested {
    margin-left: 60vw;
    transition: margin 4s;
}

.notInterested {
    margin-left: 0;
    transition: margin 4s;
}

```
__Checkpoint: Checkout your application. Event sent by community component is captured by parent component and that is used to set some css class on parent element.__

___
In this exercise we have covered

  1. Creating new component using Angular CLI
  2. Using interpolation and property binding to pass the data to the template
  3. Using @Input() decorator to pass the data to the child component
  4. Event binding
  5. Using @Output decorator to emit event to parent component
___
