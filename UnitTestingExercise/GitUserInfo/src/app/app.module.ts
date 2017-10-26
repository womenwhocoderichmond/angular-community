import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { GitUserService } from "app/shared/git-user.service";
import { GitUsersComponent } from './git-users/git-users.component';
import { UsernameFormatService } from "app/shared/username-format.service";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    GitUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GitUserService, UsernameFormatService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
