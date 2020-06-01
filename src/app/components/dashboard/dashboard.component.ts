import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import * as moment from 'moment';
import 'moment/locale/pt-br';

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
    moment.locale('es');
    this.list_copa = [];
    this.lista_ascenso = [];
  }

  ngOnInit(): void 
  {
    let data_source = this._dashboardService.getGamesAux();

    let lista_cop_aux = data_source.filter(g => g.league.trim() === 'Copa MX');
    let lista_asc_aux = data_source.filter(g => g.league.trim() === 'Ascenso MX');

    this.list_copa = this.getGamesByMonth(lista_cop_aux);
    this.lista_ascenso = this.getGamesByMonth(lista_asc_aux);
  }

  getGamesByMonth(list: Array<any> = []): Array<[{ month: string, games: [] }]>
  {
    let list_sort = [];

    list.forEach(g => {
      let month_name = moment(g.datetime).utc().format('MMMM');
      let exist_month = list_sort.find(({month}) => month === month_name);
      exist_month ? exist_month.games.push(g) : list_sort.push({ month: month_name, games: [g] });
    });

    return list_sort;
  }

  convertDateString(date_game: string): string
  {
    let convert_date = moment(date_game).utc().format('ddd D');
    return convert_date;
  }

}
