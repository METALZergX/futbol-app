import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import players from "./players.js";

@Injectable({
  providedIn: 'root'
})
export class PlayerService 
{
  constructor()
  {}

  getPlayers(): any
  {
    return players.data.team;
  }
}
