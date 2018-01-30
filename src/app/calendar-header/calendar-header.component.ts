import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { DataService } from '../data.service';

@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss']
})
export class CalendarHeaderComponent implements OnInit {

  isUserLoggedIn :boolean = true;

  constructor(private afAuth :AngularFireAuth, private router :Router, private dataService :DataService) { }

  ngOnInit() {
        this.afAuth.authState.subscribe(( user :firebase.User):void =>{  
            if(user){
                this.isUserLoggedIn = true;
            } else {
                this.isUserLoggedIn = false;
            }
        })
  }

  toggleMenu() {
        this.dataService.toggleMenu()
  }

  logUserOut() {
        this.dataService.turnOffSideMenu()
        this.isUserLoggedIn = false;
        this.afAuth.auth.signOut()
        this.router.navigate([''])
  }

}
