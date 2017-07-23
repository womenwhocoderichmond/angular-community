import { Component, OnInit } from '@angular/core';
import { Community } from "app/shared/model/Community";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  private communities : Community[];
  private selectedCommunity: Community;
   ngOnInit(){
     this.communities = [
       new Community(1,"Angular"),
       new Community(2,"Front End"),
       new Community(3,"Clean Code"),
       new Community(4,"Algorithms")
     ];
     this.selectedCommunity = this.communities[0];
     console.log(this.selectedCommunity.name);
   }
   
   showDetails(item){
     this.selectedCommunity = item;
   }

}
