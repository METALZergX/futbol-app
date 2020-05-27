import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService 
{

  constructor(private _httpClient: HttpClient)
  {}

  getGames(): Observable<any>
  {
    let configHeader = { Accept: 'application/json', 'Content-Type': 'application/json' };
    return this._httpClient.get('https://venados.dacodes.mx/api/games', { headers: configHeader });
  }

}
