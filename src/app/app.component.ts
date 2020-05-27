import { Component, Output, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  @Output() sidenavToggle = new EventEmitter();

  constructor()
  {}

  ngOnInit()
  {}

  onToggleSidenav(e)
  {
    this.sidenavToggle.emit(e);
  }
}
