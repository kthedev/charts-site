import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  barChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [11, 13, 13, 13, 8], label: 'Motorcycles' },
    { data: [38, 38, 24, 18, 41], label: 'Classic Cars' },
    { data: [22, 22, 22, 11, 25], label: 'Vintage Cars' },
  ];

  ngOnInit(): void {
  }

}
