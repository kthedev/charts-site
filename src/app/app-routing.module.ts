import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartjsComponent } from './pages/chartjs/chartjs.component';
import { GoogleChartComponent } from './pages/google-chart/google-chart.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ChartjsComponent },
  { path: 'googleChart', component: GoogleChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
