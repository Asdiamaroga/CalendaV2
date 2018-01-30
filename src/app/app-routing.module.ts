import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CalendarV2Component } from './calendar-v2/calendar-v2.component';
import { AuthGuardService } from './auth-guard.service';
import { TeamMembersComponent } from './team-members/team-members.component';
import { EventCreationComponent } from './event-creation/event-creation.component';

const routes: Routes = [
    {
      path:'',
      component: LoginComponent
    },
    {
      path:'Calendar',
      component: CalendarV2Component,
      canActivate: [AuthGuardService]
    },
    {
      path:'TeamMembers',
      component: TeamMembersComponent,
      canActivate: [AuthGuardService]
    },
    { 
      path: 'EventCreation',
      component: EventCreationComponent,
      canActivate: [AuthGuardService]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
