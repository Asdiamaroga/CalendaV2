import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styleUrls: ['./side-bar-menu.component.scss']
})
export class SideBarMenuComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

  navigateToCalendar() {
      this.router.navigate(['/Calendar'])      
  }

  navigateToTeamMembers() {
      this.router.navigate(['/TeamMembers'])      
  }

  navigateToEventCreation() {
      this.router.navigate(['/EventCreation'])
  }
}
