# Step By Step Guide for Component Exercise

* Follow Angular Setup Instruction to get project setup.
* Update app.html
  * Remove existing code. Add header element with Women Who Code RVA heading.
  * Add style to app-component.css to style the header. Use this class to style the header.
```css
.wwc-header {
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
* Update community.component.ts file
  * Remove existing ```<p>``` tag and add a ```<div>``` tag with text “Angular Community”
* Update app.component.html file to add tag <app-community>. 
```html
<app-community></app-community>
```
Notice that in community.component.ts file, in @Component decorator the selector is specified as 'app-community'.
