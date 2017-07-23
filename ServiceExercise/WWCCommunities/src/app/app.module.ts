import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommunityComponent } from './community/community.component';
import { CommunityDetailComponent } from './community-detail/community-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CommunityComponent,
    CommunityDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
