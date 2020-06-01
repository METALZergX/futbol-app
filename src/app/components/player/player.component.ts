import { Component, OnInit, HostListener } from '@angular/core';
import { PlayerService } from './player.service';
import { MatDialog } from '@angular/material/dialog';
import { PlayerDetailModalComponent } from './player-detail-modal/player-detail-modal.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit 
{
  innerWidth: any;
  list_players: Array<any>;
  columns_view: number;
  list_position_team: Array<string>;

  constructor(private _playerService: PlayerService, private _matDialog: MatDialog)
  {
    this.columns_view = 6;
    this.list_players = [];
    this.list_position_team = [];
  }

  ngOnInit(): void 
  {
    this.innerWidth = window.innerWidth;
    this.validateWidth(this.innerWidth);
    this.list_players = this._playerService.getPlayers();
    this.list_position_team = Object.keys(this.list_players);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) 
  {
    this.innerWidth = event.target.innerWidth;
    this.validateWidth(this.innerWidth);
  }

  validateWidth(actualWidth: number)
  {
    if(actualWidth < 768)
    {
      this.columns_view = 3;
    }
  }

  showDetailPlayer(info: any)
  {
    if(info)
    {
      const dialogRef = this._matDialog.open(PlayerDetailModalComponent, { width: '350px', data: info });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      }); 
    }
  }
}
