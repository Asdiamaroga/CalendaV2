import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  showSideMenu :boolean = false;

  constructor(private dataService :DataService) {
      this.dataService.showMenuSubject.subscribe( showMenu => this.showSideMenu = showMenu )
  }

}
