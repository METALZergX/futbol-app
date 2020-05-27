import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsComponent } from '../components/statistics/statistics.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule 
{}
