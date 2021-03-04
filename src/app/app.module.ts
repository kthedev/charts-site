import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';
import { GoogleChartsModule } from 'angular-google-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './charts/chartjs/line-chart/line-chart.component';
import { BarChartComponent } from './charts/chartjs/bar-chart/bar-chart.component';
import { PieChartComponent } from './charts/chartjs/pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './charts/chartjs/doughnut-chart/doughnut-chart.component';
import { ChartjsComponent } from './pages/chartjs/chartjs.component';
import { GoogleChartComponent } from './pages/google-chart/google-chart.component';
import { GoogleLineChartComponent } from './charts/googlechart/google-line-chart/google-line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    DoughnutChartComponent,
    ChartjsComponent,
    GoogleChartComponent,
    GoogleLineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
