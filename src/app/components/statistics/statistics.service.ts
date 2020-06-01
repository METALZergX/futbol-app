import { Injectable } from '@angular/core';
import statistics from "./statistics.js";

@Injectable({
  providedIn: 'root'
})
export class StatisticsService
{
  constructor()
  {}

  getStatisticGames(): Array<any>
  {
    return statistics.data.statistics;
  }
}
