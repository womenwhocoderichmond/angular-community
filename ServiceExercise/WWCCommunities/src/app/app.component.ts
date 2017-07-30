import { Component, OnInit } from '@angular/core';
import { Community } from "app/shared/community.model";
import * as CommunityDetails from "app/shared/community-details"
import { Person } from "app/shared/person.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  private communities : Community[];
  private selectedCommunity: Community;

   ngOnInit(){
     this.communities = this.loadCommunities();
     this.selectedCommunity = this.communities[0];
   }
   
   showDetails(item){
     this.selectedCommunity = item;
   }

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

}
