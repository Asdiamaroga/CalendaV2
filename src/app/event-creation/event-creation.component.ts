import { Component, OnInit } from '@angular/core';
import { fallIn, fallInSlow } from '../custom.animations';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.scss'],
  animations: [fallIn(), fallInSlow()]
})
export class EventCreationComponent implements OnInit {

  state :string = ''

  constructor() { }

  ngOnInit() {
  }

}
