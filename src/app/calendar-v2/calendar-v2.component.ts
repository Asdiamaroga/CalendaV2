import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn, fallInSlow } from '../custom.animations'
import { Subject } from 'rxjs'
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#ad2121'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#1e90ff'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#e3bc08'
  }
};

@Component({
  selector: 'app-calendar-v2',
  templateUrl: './calendar-v2.component.html',
  styleUrls: ['./calendar-v2.component.scss'],
  animations: [fallIn(), fallInSlow()]
})
export class CalendarV2Component implements OnInit {

  state :string = ''

  view :string = 'week'
  viewDate :Date = new Date()
  showNewDateEntry  :boolean = false

  events: CalendarEvent[] = [
    {
      title: 'Simple event',
      color: colors.blue,
      start: new Date(),
    },
    {
      title: 'Simple event2',
      color: colors.yellow,
      start: new Date(),
    },
    {
      title: 'Simple event',
      color: colors.red,
      start: new Date(),
    }
  ];

  refresh: Subject<any> = new Subject();


  constructor() { }

  ngOnInit() {
  }

  toggleDateEntry() {
    this.showNewDateEntry = true;
  }
 
  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }

}
