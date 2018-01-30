import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMembersSummaryComponent } from './team-members-summary.component';

describe('TeamMembersSummaryComponent', () => {
  let component: TeamMembersSummaryComponent;
  let fixture: ComponentFixture<TeamMembersSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMembersSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMembersSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
