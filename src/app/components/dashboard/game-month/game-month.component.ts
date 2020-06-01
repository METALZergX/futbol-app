import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-game-month',
  templateUrl: './game-month.component.html',
  styleUrls: ['./game-month.component.css']
})
export class GameMonthComponent implements OnInit 
{
  @Input() header: string;
  @Input() games: Array<any>

  list_games: any;
  title_month: string;

  local_team_name: string;
  local_team_logo: string;

  constructor()
  {
    this.list_games = [];
    this.title_month = '';

    this.local_team_name = 'Venados F.C';
    this.local_team_logo = 'assets/venados_logo.png';
  }

  ngOnInit(): void 
  {
    this.title_month = this.header;
    this.list_games = this.games;
  }

  convertDateString(date_game: string): string
  {
    let convert_date = moment(date_game).utc().format('ddd D');
    return convert_date;
  }

}
