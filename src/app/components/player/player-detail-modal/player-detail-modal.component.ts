import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';

@Component({
  selector: 'app-player-detail-modal',
  templateUrl: './player-detail-modal.component.html',
  styleUrls: ['./player-detail-modal.component.css']
})
export class PlayerDetailModalComponent implements OnInit
{
  constructor(public dialogRef: MatDialogRef<PlayerDetailModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any)
  {}

  ngOnInit(): void
  {}

  getNameFull(infoPlayer: any): string
  {
    let {name, first_surname, second_surname} = infoPlayer;
    return `${name} ${first_surname} ${second_surname}`;
  }

  getBirthday(date: string): string
  {
    return moment(date).utc().format('DD/MM/YYYY');
  }

  closeDialog(): void 
  {
    this.dialogRef.close();
  }

}
