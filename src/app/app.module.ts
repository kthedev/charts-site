import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './charts/chartjs/line-chart/line-chart.component';
import { BarChartComponent } from './charts/chartjs/bar-chart/bar-chart.component';
import { PieChartComponent } from './charts/chartjs/pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './charts/chartjs/doughnut-chart/doughnut-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    DoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
