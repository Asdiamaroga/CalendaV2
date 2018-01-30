import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMembersTableComponent } from './team-members-table.component';

describe('TeamMembersTableComponent', () => {
  let component: TeamMembersTableComponent;
  let fixture: ComponentFixture<TeamMembersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMembersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMembersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
