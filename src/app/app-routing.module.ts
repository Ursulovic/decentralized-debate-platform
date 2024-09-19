import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomePageComponent} from 'src/app/components/home-page/home-page.component';
import {UserProfileComponent} from 'src/app/components/user-profile/user-profile.component';
import {NewDebateComponent} from 'src/app/components/new-debate/new-debate.component';
import {AllDebatesComponent} from 'src/app/components/all-debates/all-debates.component';
import {SingleDebateComponent} from 'src/app/components/single-debate/single-debate.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  },
  {
    path: 'newDebate',
    component: NewDebateComponent
  },
  {
    path: 'allDebates',
    component: AllDebatesComponent
  },
  {
    path: 'newDebate',
    component: NewDebateComponent
  },
  {
    path: 'debate/:id',
    component: SingleDebateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
