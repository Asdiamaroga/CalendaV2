import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { TeamMember, PlainTeamMember } from './data.classes';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
    readonly fireBaseTeamMembersCollection :string = 'teamMembers';

    private menuBeingShowen :boolean = false;
    showMenuSubject :BehaviorSubject<boolean>;

    private teamMemberCollection : AngularFirestoreCollection<PlainTeamMember>
    private teamMembers :any
    private plainTeamMembers :Observable<PlainTeamMember[]>

  constructor(private aFireStore :AngularFirestore) {
        this.showMenuSubject = new BehaviorSubject<boolean>(this.menuBeingShowen)
        this.initFireStoreData()
  }

  
  private initFireStoreData() {
        this.teamMemberCollection = this.aFireStore.collection(this.fireBaseTeamMembersCollection)
        this.plainTeamMembers = this.teamMemberCollection.valueChanges()
        this.teamMembers = this.teamMemberCollection.snapshotChanges()
        .map( actions => {
                  return actions.map( a => {
                            const data = a.payload.doc.data();
                            const id = a.payload.doc.id;
                            return { id, data };
                          })
        })
  }
  

  toggleMenu() {
        this.menuBeingShowen = !this.menuBeingShowen
        this.showMenuSubject.next(this.menuBeingShowen)
  }

  turnOffSideMenu() {
        this.menuBeingShowen = false
        this.showMenuSubject.next(this.menuBeingShowen)
  }


  getPlainTeamMembersList() :Observable<PlainTeamMember[]> {
      return this.plainTeamMembers
  }

  getTeamMemberList() :Observable<any> {
        return this.teamMembers
  }

  updateTeamMember(teamMember :TeamMember) {
        this.teamMemberCollection.doc(teamMember.id).set(this.createDataObjToBeSent(teamMember))
  }

  createNewTeamMember( teamMember :TeamMember) {
        this.teamMemberCollection.add(this.createDataObjToBeSent(teamMember))
  }

  private createDataObjToBeSent(teamMember :TeamMember) {
    let data = {
                    name: teamMember.data.name,
                    surName: teamMember.data.surName,
                    color:  {
                                primary: teamMember.data.color.primary,
                                secondary: teamMember.data.color.secondary
                            }
                }
    return data;
  }

  deleteTeamMember(memberId :string) {
        this.teamMemberCollection.doc(memberId).delete()
  }
}
