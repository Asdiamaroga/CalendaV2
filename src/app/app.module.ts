import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from './material.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule,  } from 'angularfire2/firestore'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { fireBaseconfig } from './firebase.auth';

import { FormsModule } from '@angular/forms';

import { AuthGuardService } from './auth-guard.service';
import { DataService } from './data.service';

import { CalendarModule } from 'angular-calendar';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CalendarV2Component } from './calendar-v2/calendar-v2.component';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { SideBarMenuComponent } from './side-bar-menu/side-bar-menu.component';
import { CalendarV2ViewManagerComponent } from './calendar-v2-view-manager/calendar-v2-view-manager.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { TeamMembersSummaryComponent } from './team-members-summary/team-members-summary.component';
import { EventCreationComponent } from './event-creation/event-creation.component';
import { TeamMembersTableComponent } from './team-members-table/team-members-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalendarV2Component,
    CalendarHeaderComponent,
    SideBarMenuComponent,
    CalendarV2ViewManagerComponent,
    TeamMembersComponent,
    TeamMembersSummaryComponent,
    EventCreationComponent,
    TeamMembersTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    MyOwnCustomMaterialModule, 
    AngularFireModule.initializeApp(fireBaseconfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ColorPickerModule
  ],
  providers: [AuthGuardService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
