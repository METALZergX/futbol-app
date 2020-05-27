import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit
{
  list_copa: Array<any>;
  lista_ascenso: Array<any>;

  constructor(private _dashboardService: DashboardService)
  {
    this.list_copa = [];
    this.lista_ascenso = [];
  }

  ngOnInit(): void 
  {
    this._dashboardService.getGames().subscribe(resp => {
      console.log('R.', resp);
    });
  }

}
