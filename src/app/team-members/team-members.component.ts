import { Component, OnInit } from '@angular/core';
import { fallIn } from '../custom.animations';
import { DataService } from '../data.service';
import { MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { TeamMember } from '../data.classes';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss'],
  animations: [fallIn()]
})
export class TeamMembersComponent implements OnInit {

  state :string = ""
  toggle :boolean = false;
  private dataSubscription :Subscription

  selectedRowIndex :number;
  displayedColumns = ['name', 'surname', 'color'];
  dataSource
  teamMember : TeamMember

  memberName :string = ""
  memberSurName :string = ""
  memberColor :string = '#ffa500'

  constructor(private dataService :DataService) { }

  ngOnInit() {
      this.dataSubscription = this.dataService.getTeamMemberList().subscribe( teamMembers => {
                                                      console.log("WTF")
                                                      this.dataSource = new MatTableDataSource(teamMembers)
                                                    })
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe()
  }

  selectRow(row) {
      if(this.teamMember && this.teamMember.id == row.id){
          this.clearTeamMemberFields()
          return;
      } 
          
      this.teamMember = row
      this.memberName = this.teamMember.data.name
      this.memberSurName = this.teamMember.data.surName
      this.memberColor = this.teamMember.data.color.primary
      
  }

  private clearTeamMemberFields() {
      this.teamMember = undefined
      this.memberName = ''
      this.memberSurName = ''
      this.memberColor = '#ffa500'
  }

  highLightRow(row) {
      if(this.selectedRowIndex == row.id){
          this.selectedRowIndex = 0 
          return;
      } 

      this.selectedRowIndex = row.id 
  }

  saveOrUpdate() {
    if(this.checkIfItsAnExistingMember()){
      this.updateMember()
      return;
    } 

    this.createNewMember()
  }

  updateMember() {
      let updatedMember = this.createNewTeamMemberObjFromScreen()
      this.dataService.updateTeamMember(updatedMember)
  }

  createNewMember() {
      console.log("CREATING NEW MEMBER")
      let doWeHaveData = this.checkIfScreenIsFilled()
      if(doWeHaveData){
          let newMember = this.createNewTeamMemberObjFromScreen()
          this.dataService.createNewTeamMember(newMember)
          this.clearTeamMemberFields()
      }
      
  }

  deleteMember() {
      console.log("DELETE MEMBER")
      if(this.checkIfScreenIsFilled() && this.checkIfItsAnExistingMember()){
          this.dataService.deleteTeamMember(this.teamMember.id)
          this.clearTeamMemberFields()
      }
      
  }

  private checkIfScreenIsFilled() :boolean {
    if(this.memberName && this.memberSurName){
        return true
    }
    return false
  }

  private checkIfItsAnExistingMember() :boolean {
      if(this.teamMember){
          return true
      }
      return false
  }

  private createNewTeamMemberObjFromScreen(): TeamMember {
    let newId :string = ""
    let secondaryColor :string = "#000000"
    if(this.checkIfItsAnExistingMember()){
      newId = this.teamMember.id
      secondaryColor = this.teamMember.data.color.secondary
    }

    let memberObj :TeamMember = {
        id: newId,
        data: {
          name: this.memberName,
          surName: this.memberSurName,
          color: {
              primary: this.memberColor,
              secondary: secondaryColor
          }
        }
      }
    return memberObj
  }
}
