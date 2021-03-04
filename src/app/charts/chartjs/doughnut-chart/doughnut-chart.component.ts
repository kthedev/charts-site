import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet, Color } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

  constructor() { }

  doughnutChartLabels: Label[] = ['Motorcycles', 'Classic Cars', 'Vintage Cars'];
  doughnutChartData: MultiDataSet = [
    [58, 159, 102]
  ];
  doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {
  }

}
