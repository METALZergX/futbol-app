import { Component, OnInit } from '@angular/core';
import { StatisticsService } from './statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit 
{
  list_statistics: Array<any>;

  constructor(private _statisticService: StatisticsService)
  {
    this.list_statistics = [];
  }

  ngOnInit(): void 
  {
    this.list_statistics = this._statisticService.getStatisticGames();
  }

}
