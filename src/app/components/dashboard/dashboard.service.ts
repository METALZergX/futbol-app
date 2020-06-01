import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, from } from 'rxjs';
import lista from './games.js';

@Injectable({
  providedIn: 'root'
})
export class DashboardService 
{
  private _games: Array<any>;

  constructor(private _httpClient: HttpClient)
  {
    this._games = [];
  }

  getGames(): Observable<any>
  {
    let configHeader = new HttpHeaders({ 'Accept': 'application/json' });
    return this._httpClient.get('https://venados.dacodes.mx/api/games', { headers: configHeader });
  }

  getGamesAux(): Array<any>
  {
    return this._games = lista.data.games;
  }

}
