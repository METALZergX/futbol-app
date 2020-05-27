import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav-mobile',
  templateUrl: './side-nav-mobile.component.html',
  styleUrls: ['./side-nav-mobile.component.css']
})
export class SideNavMobileComponent implements OnInit 
{
  @Output() sideNavClose = new EventEmitter();

  constructor() 
  {}

  ngOnInit(): void {
  }

  public onSidenavClose()
  {
    this.sideNavClose.emit();
  }

}
