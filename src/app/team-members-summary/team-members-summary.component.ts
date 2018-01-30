import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PlainTeamMember } from '../data.classes'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-team-members-summary',
  templateUrl: './team-members-summary.component.html',
  styleUrls: ['./team-members-summary.component.scss']
})
export class TeamMembersSummaryComponent implements OnInit {

  private dataSubscription :Subscription
  plainTeamMembers :PlainTeamMember[]

  constructor(private dataService :DataService) { }

  ngOnInit() {
      this.dataSubscription = this.dataService.getPlainTeamMembersList()
                                .subscribe( teamMembers => this.plainTeamMembers = teamMembers)
  }

  ngOnDestroy() {
      this.dataSubscription.unsubscribe()
  }


}
