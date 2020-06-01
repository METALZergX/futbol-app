import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-mobile',
  templateUrl: './side-nav-mobile.component.html',
  styleUrls: ['./side-nav-mobile.component.css']
})
export class SideNavMobileComponent implements OnInit 
{
  @Output() sideNavClose = new EventEmitter();

  constructor(public activeRoute: Router)
  {}

  ngOnInit(): void 
  {}

  public onSidenavClose()
  {
    this.sideNavClose.emit();
  }

  isActiveRoute(routeName: string)
  {
    let route_url = this.activeRoute.url;

    return (route_url.trim() == routeName) ? true:false;
  }

}
