import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityDetailComponent } from "app/community-detail/community-detail.component";
import { CommunityService } from "app/shared/service/community.service";
import { DetailsCommunityService } from "app/details/shared/details-community.service";

@NgModule({
  imports: [
    CommonModule
  ],
  
  declarations: [CommunityDetailComponent],
  exports:[CommunityDetailComponent]
})
export class DetailsModule {
}
