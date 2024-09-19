import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { FormsModule } from '@angular/forms';
import { NewDebateComponent } from './components/new-debate/new-debate.component';
import { AllDebatesComponent } from './components/all-debates/all-debates.component';
import { SingleDebateComponent } from './components/single-debate/single-debate.component';
import { DisplayProfileComponent } from './components/display-profile/display-profile.component';  // <<<< import it here


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserProfileComponent,
    NewDebateComponent,
    AllDebatesComponent,
    SingleDebateComponent,
    DisplayProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

