import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from "@angular/material/list";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing/routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { HeaderComponent } from './components/Navigator/header/header.component';
import { SideNavMobileComponent } from './components/Navigator/side-nav-mobile/side-nav-mobile.component';
import { GameMonthComponent } from './components/dashboard/game-month/game-month.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayerDetailModalComponent } from './components/player/player-detail-modal/player-detail-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StatisticsComponent,
    HeaderComponent,
    SideNavMobileComponent,
    GameMonthComponent,
    PlayerComponent,
    PlayerDetailModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
