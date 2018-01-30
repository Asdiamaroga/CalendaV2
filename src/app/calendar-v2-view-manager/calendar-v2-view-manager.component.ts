import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'calendar-v2-view-manager',
  templateUrl: './calendar-v2-view-manager.component.html',
  styleUrls: ['./calendar-v2-view-manager.component.scss']
})
export class CalendarV2ViewManagerComponent implements OnInit {

  @Input() view: string;

  @Input() viewDate: Date;

  @Input() locale: string = 'en';

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
