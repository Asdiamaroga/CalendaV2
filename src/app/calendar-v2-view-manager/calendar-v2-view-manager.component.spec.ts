import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarV2ViewManagerComponent } from './calendar-v2-view-manager.component';

describe('CalendarV2ViewManagerComponent', () => {
  let component: CalendarV2ViewManagerComponent;
  let fixture: ComponentFixture<CalendarV2ViewManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarV2ViewManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarV2ViewManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
