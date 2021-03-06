import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-line-chart',
  templateUrl: './google-line-chart.component.html',
  styleUrls: ['./google-line-chart.component.scss']
})
export class GoogleLineChartComponent implements OnInit {

  constructor() { }

  title = 'Sales Report';
   type = 'LineChart';
   data = [
    ['2/3/2005', 	733.11],
    ['3/3/2005', 	3207.12],
    ['4/8/2005', 	2434.56],
    ['5/13/2005', 	7516.08],
    ['1/20/2005', 	4514.92],
    ['2/17/2005', 	8254.8],
    ['3/9/2005', 	2416.56],
    ['5/1/2005', 	4140.23],
    ['5/31/2005', 	12001],
    ['2/2/2005', 	5288.01],
    ['3/3/2005', 	2225.5],
    ['4/7/2005', 	5833.8],
    ['5/13/2005', 	5887.35],
    ['1/5/2005', 	3664.1],
    ['2/2/2005', 	3834.38],
    ['3/3/2005', 	1822.17],
    ['4/8/2005', 	11886.6],
    ['5/13/2005', 	9218.16],
    ['1/31/2005', 	4046.25],
    ['2/23/2005', 	4846.7],
    ['3/17/2005', 	3370.56],
    ['4/1/2005', 	9661.44],
    ['5/6/2005', 	2764.88],
    ['1/20/2005', 	2297.05],
    ['2/17/2005', 	6231.54],
    ['3/9/2005', 	1735.3],
    ['5/1/2005', 	4427.73],
    ['5/31/2005', 	5894.94],
    ['1/6/2005', 	2817.87],
    ['2/3/2005', 	3420],
    ['3/3/2005', 	2575.04],
    ['5/17/2005', 	1961.28],
    ['1/23/2005', 	3560.64],
    ['2/17/2005', 	3823.64],
    ['3/17/2005', 	2280.96],
    ['5/5/2005', 	8677.8],
    ['1/20/2005', 	8470.14],
    ['2/17/2005', 	2952],
    ['3/9/2005', 	2464.8],
    ['5/1/2005', 	6232],
    ['5/31/2005', 	7969.36],
    ['1/5/2005', 	3877.06],
    ['2/3/2005', 	3867.08],
    ['3/3/2005', 	5951.44],
    ['4/8/2005', 	8648.64],
    ['5/13/2005', 	3447.78],
    ['1/26/2005', 	5862],
    ['2/17/2005', 	4071.85],
    ['5/5/2005', 	8236.75],
    ['1/6/2005', 	3288.82],
    ['2/8/2005', 	3987.2],
    ['3/3/2005', 	1809.5],
    ['5/17/2005', 	1092.2],
    ['1/26/2005', 	5941.5],
    ['2/17/2005', 	3241.9],
    ['3/23/2005', 	6109.29],
    ['5/5/2005', 	3387.78],
    ['1/6/2005', 	2775.08],
    ['2/9/2005', 	1627.92],
    ['3/3/2005', 	2529.36],
    ['5/17/2005', 	3065.78],
    ['1/23/2005', 	1749.79],
    ['2/17/2005', 	2130.56],
    ['5/3/2005', 	5951.34],
    ['5/31/2005', 	4692.6],
    ['1/6/2005', 	4068.7],
    ['2/9/2005', 	5182],
    ['3/3/2005', 	5243.79],
    ['4/14/2005', 	9048.16],
    ['5/17/2005', 	3832.64],
    ['1/20/2005', 	3911.49],
    ['2/17/2005', 	4704],
    ['3/9/2005', 	2467.9],
    ['5/1/2005', 	3213],
    ['5/31/2005', 	7182],
    ['1/7/2005', 	2611.8],
    ['2/9/2005', 	5895.05],
    ['3/4/2005', 	3375.72],
    ['4/15/2005', 	8374.69],
    ['5/17/2005', 	4464.24],
    ['1/20/2005', 	9240.44],
    ['2/16/2005', 	2515.32],
    ['3/9/2005', 	5548.9],
    ['5/30/2005', 	4873.05],
    ['1/20/2005', 	3156.16],
    ['2/17/2005', 	1320.75],
    ['3/9/2005', 	4998],
    ['5/30/2005', 	1293.75],
    ['1/12/2005', 	2758.7],
    ['2/10/2005', 	1449.76],
    ['4/22/2005', 	7048.14],
    ['5/17/2005', 	5202.94],
    ['1/31/2005', 	1611.4],
    ['3/1/2005', 	1364.25],
    ['3/30/2005', 	4215.09],
    ['4/1/2005', 	6433.82],
    ['5/10/2005', 	4352.16],
    ['1/12/2005', 	4703.81],
    ['2/10/2005', 	5399.55],
    ['4/22/2005', 	14082.8],
    ['5/29/2005', 	5283.6],
    ['1/6/2005', 	3686.54],
    ['2/9/2005', 	2100.56],
    ['3/3/2005', 	3881.78],
    ['4/14/2005', 	4509.12],
    ['5/17/2005', 	3273.27],
    ['1/10/2005', 	4207.84],
    ['2/9/2005', 	4352.76],
    ['3/4/2005', 	1463.7],
    ['4/15/2005', 	7169.28],
    ['5/17/2005', 	4594.76],
    ['1/23/2005', 	2602.25],
    ['2/17/2005', 	2200],
    ['5/3/2005', 	6712.93],
    ['5/31/2005', 	5318.04],
    ['1/12/2005', 	8884.8],
    ['2/10/2005', 	1331.1],
    ['4/22/2005', 	3051.3],
    ['5/29/2005', 	2288.52],
    ['1/20/2005', 	3949],
    ['2/22/2005', 	3843.99],
    ['5/3/2005', 	5498.08],
    ['5/31/2005', 	3777.58],
    ['1/12/2005', 	4196.07],
    ['2/16/2005', 	4931.6],
    ['3/4/2005', 	3068.69],
    ['4/23/2005', 	785.64],
    ['5/29/2005', 	4977],
    ['1/20/2005', 	2130.92],
    ['2/17/2005', 	1701.7],
    ['3/9/2005', 	1694],
    ['5/3/2005', 	2913.53],
    ['5/31/2005', 	935.18],
    ['2/2/2005', 	2909.34],
    ['3/1/2005', 	1570.17],
    ['3/30/2005', 	2613.92],
    ['4/3/2005', 	3193.26],
    ['5/10/2005', 	1482.6],
    ['1/5/2005', 	1142.41],
    ['2/2/2005', 	1172.6],
    ['3/3/2005', 	6981],
    ['4/7/2005', 	3064.6],
    ['5/13/2005', 	2202.48],
    ['1/12/2005', 	3033.28],
    ['2/16/2005', 	990.78],
    ['3/4/2005', 	2030.86],
    ['5/29/2005', 	5433.75],
    ['1/10/2005', 	6144.6],
    ['2/10/2005', 	5127.2],
    ['4/22/2005', 	6386.16],
    ['5/17/2005', 	7695.6],
    ['1/20/2005', 	4581.36],
    ['2/17/2005', 	4319.76],
    ['3/9/2005', 	1448],
    ['5/30/2005', 	881.4],
    ['1/20/2005', 	1237.88],
    ['2/17/2005', 	2723.2],
    ['3/10/2005', 	2218.52],
    ['5/30/2005', 	1665.32],
    ['1/31/2005', 	1908.28],
    ['3/1/2005', 	3441.37],
    ['3/30/2005', 	2023.28],
    ['4/1/2005', 	2245.2],
    ['5/6/2005', 	3255.12],
    ['1/20/2005', 	1978.62],
    ['2/17/2005', 	4288.2],
    ['3/10/2005', 	2520.68],
    ['5/30/2005', 	1781.22],
    ['1/26/2005', 	3862.88],
    ['2/22/2005', 	1476.48],
    ['3/23/2005', 	5273.73],
    ['5/6/2005', 	4872.03],
    ['1/10/2005', 	6275.72],
    ['1/20/2005', 	1534.95],
    ['2/9/2005', 	7264.53],
    ['2/22/2005', 	6869.05],
    ['3/15/2005', 	3353.02],
    ['4/14/2005', 	8289.05],
    ['5/3/2005', 	11887.8],
    ['5/17/2005', 	5926.9],
    ['5/31/2005', 	3793.16],
    ['1/26/2005', 	2117.75],
    ['2/22/2005', 	3340.48],
    ['3/23/2005', 	2154],
    ['5/6/2005', 	5808.48],
    ['1/6/2005', 	2773.8],
    ['2/10/2005', 	2464],
    ['3/4/2005', 	5491.6],
    ['1/20/2005', 	3288.6],
    ['2/17/2005', 	8935.5],
    ['3/10/2005', 	4035.96],
    ['5/30/2005', 	1875.09],
    ['1/6/2005', 	4142.64],
    ['2/10/2005', 	4149.07],
    ['3/4/2005', 	7397],
    ['1/12/2005', 	4808.38],
    ['2/10/2005', 	2266.56],
    ['4/15/2005', 	10468.9],
    ['5/17/2005', 	5589.14],
    ['1/6/2005', 	2851.84],
    ['2/10/2005', 	4609.64],
    ['3/4/2005', 	5079.96],
    ['4/8/2005', 	1879.92],
    ['1/31/2005', 	3024.5],
    ['3/1/2005', 	1266.1],
    ['3/30/2005', 	4811.85],
    ['4/1/2005', 	7307.42],
    ['5/9/2005', 	6209.25],
    ['1/26/2005', 	7031.52],
    ['2/22/2005', 	5340.9],
    ['3/15/2005', 	6376.58],
    ['5/5/2005', 	6896.75],
    ['1/12/2005', 	2696.96],
    ['2/16/2005', 	3376.64],
    ['4/22/2005', 	541.14],
    ['5/29/2005', 	6134.7],
    ['1/26/2005', 	3562.49],
    ['2/22/2005', 	1640.24],
    ['3/23/2005', 	4739.4],
    ['5/6/2005', 	1207.68],
    ['1/20/2005', 	1668.37],
    ['2/17/2005', 	4890.6],
    ['5/1/2005', 	5235.72],
    ['5/31/2005', 	4325.16],
    ['1/20/2005', 	2730],
    ['2/17/2005', 	7827.3],
    ['5/1/2005', 	2095.45],
    ['5/31/2005', 	1556.62],
    ['1/6/2005', 	1629.04],
    ['2/10/2005', 	3289.86],
    ['3/4/2005', 	6862.94],
    ['1/12/2005', 	3751],
    ['2/16/2005', 	4536],
    ['4/22/2005', 	4421.34],
    ['5/29/2005', 	2078.28],
    ['1/12/2005', 	1267.77],
    ['2/16/2005', 	3441.82],
    ['4/22/2005', 	1987.18],
    ['5/29/2005', 	3880.2],
    ['1/23/2005', 	2431.75],
    ['2/22/2005', 	2018.72],
    ['3/15/2005', 	1558.99],
    ['5/3/2005', 	1104.6],
    ['5/31/2005', 	2575.1],
    ['1/5/2005', 	4846],
    ['2/2/2005', 	4197.1],
    ['3/3/2005', 	4597.65],
    ['4/8/2005', 	5287.7],
    ['5/13/2005', 	3550.05],
    ['1/12/2005', 	1463],
    ['2/10/2005', 	3970.56],
    ['4/22/2005', 	2576],
    ['5/29/2005', 	2233.69],
    ['2/2/2005', 	4328.6],
    ['3/1/2005', 	1376.43],
    ['3/30/2005', 	5552.16],
    ['4/3/2005', 	3659.02],
    ['5/10/2005', 	4165.61],
    ['1/12/2005', 	834.67],
    ['2/16/2005', 	2257.92],
    ['3/9/2005', 	8344.71],
    ['4/23/2005', 	1801.94],
    ['5/29/2005', 	1209.6],
    ['1/6/2005', 	3595.62],
    ['2/3/2005', 	2443.29],
    ['3/3/2005', 	3988.6],
    ['4/7/2005', 	5168.4],
    ['5/10/2005', 	2803.2],
    ['1/26/2005', 	3910.53],
    ['2/23/2005', 	2255.12],
    ['3/23/2005', 	5720.75],
    ['5/6/2005', 	3335.23],
    ['1/12/2005', 	856.52],
    ['2/16/2005', 	1845.45],
    ['3/9/2005', 	4042.08],
    ['5/29/2005', 	1828],
    ['1/23/2005', 	3449.4],
    ['2/17/2005', 	2654.4],
    ['5/3/2005', 	8498],
    ['5/31/2005', 	5510.54],
    ['1/6/2005', 	2632.89],
    ['2/3/2005', 	2046],
    ['3/4/2005', 	2279.55],
    ['4/8/2005', 	2150.55],
    ['1/19/2005', 	4107.2],
    ['2/16/2005', 	1350],
    ['4/22/2005', 	7182],
    ['5/29/2005', 	3933.93],
    ['1/23/2005', 	5545.8],
    ['2/22/2005', 	6089.6],
    ['3/15/2005', 	1789.4],
    ['5/3/2005', 	1082.1],
    ['5/31/2005', 	1030.44],
    ['1/31/2005', 	2676.72],
    ['3/1/2005', 	2182.44],
    ['3/30/2005', 	1611.4],
    ['4/1/2005', 	1479.84],
    ['5/9/2005', 	1424.22],
    ['1/19/2005', 	4223.13],
    ['2/16/2005', 	1596.76],
    ['4/22/2005', 	5820.35],
    ['5/29/2005', 	5296.5],
    ['1/12/2005', 	5018.4],
    ['2/10/2005', 	5856.85],
    ['3/4/2005', 	4894.73],
    ['4/14/2005', 	2094.32],
    ['5/17/2005', 	640.05],
    ['1/31/2005', 	1891.56],
    ['2/23/2005', 	4208.41],
    ['3/23/2005', 	2246.4],
    ['5/6/2005', 	6107.4],
    ['1/19/2005', 	3662.52],
    ['2/16/2005', 	3478.64],
    ['4/22/2005', 	1057.29],
    ['5/29/2005', 	3385.9],
    ['1/6/2005', 	2447.76],
    ['2/10/2005', 	1910.84],
    ['3/4/2005', 	2430.64],
    ['5/17/2005', 	2896.3],
    ['1/31/2005', 	3036],
    ['3/1/2005', 	2231.6],
    ['3/30/2005', 	2436.78],
    ['4/1/2005', 	2173.6],
    ['5/9/2005', 	1254.6],
    ['1/19/2005', 	1991.6],
    ['2/16/2005', 	3953.18],
    ['4/22/2005', 	3729.39],
    ['5/29/2005', 	2617.16],
    ['1/31/2005', 	2394.3],
    ['2/28/2005', 	3164.98],
    ['3/23/2005', 	3351.09],
    ['4/1/2005', 	3064.32],
    ['5/6/2005', 	3891.81],
    ['1/6/2005', 	2931.98],
    ['2/10/2005', 	1757.91],
    ['3/4/2005', 	6763.05],
    ['4/14/2005', 	11739.7],
    ['5/17/2005', 	9240],
    ['1/31/2005', 	2847],
    ['3/1/2005', 	3006.12],
    ['3/30/2005', 	2797.84],
    ['4/3/2005', 	3843.2],
    ['5/10/2005', 	1351.08],
    ['1/19/2005', 	1717.64],
    ['2/16/2005', 	4086.29],
    ['4/22/2005', 	553.95],
    ['5/29/2005', 	652.35],
    ['1/23/2005', 	1408.96],
    ['2/22/2005', 	1972.11],
    ['3/15/2005', 	5207.75],
    ['5/3/2005', 	4253.2],
    ['1/20/2005', 	3476.8],
    ['2/17/2005', 	4592.61],
    ['5/30/2005', 	2208.92],
    ['2/3/2005', 	10039.6],
    ['3/1/2005', 	3167],
    ['3/30/2005', 	3521.25],
    ['4/3/2005', 	4219.28],
    ['5/10/2005', 	3581.76],
    ['1/6/2005', 	5154.41],
    ['2/10/2005', 	4894.17],
    ['3/4/2005', 	2472.6],
    ['1/23/2005', 	4044.04],
    ['2/17/2005', 	2708.42],
    ['5/1/2005', 	2904.72],
    ['5/31/2005', 	3553.88],
    ['1/6/2005', 	6576.5],
    ['2/3/2005', 	6353.27],
    ['3/2/2005', 	4175.6],
    ['4/3/2005', 	4992.61],
    ['5/10/2005', 	4764.6],
    ['1/6/2005', 	2317.44],
    ['2/10/2005', 	3298.4],
    ['3/4/2005', 	1826.96],
    ['4/8/2005', 	1206.9],
    ['1/23/2005', 	1329.4],
    ['2/22/2005', 	1701.76],
    ['3/15/2005', 	2259.72],
    ['5/3/2005', 	925.3],
    ['5/31/2005', 	482.13],
    ['1/23/2005', 	2986.5],
    ['2/22/2005', 	1587.08],
    ['3/15/2005', 	1808.4],
    ['5/5/2005', 	1193.04],
    ['1/20/2005', 	3160.25],
    ['2/17/2005', 	6799.68],
    ['5/1/2005', 	1867.32],
    ['5/31/2005', 	2702.04],
    ['2/3/2005', 	3619.44],
    ['3/3/2005', 	3918.95],
    ['3/30/2005', 	1483.02],
    ['4/3/2005', 	4819.26],
    ['5/10/2005', 	1591.72],
    ['1/7/2005', 	3425.18],
    ['2/3/2005', 	4701.88],
    ['3/4/2005', 	2204.1],
    ['4/8/2005', 	5189.4],
    ['2/3/2005', 	3224.2],
    ['3/3/2005', 	3211.38],
    ['3/30/2005', 	1796.34],
    ['4/3/2005', 	1979.6],
    ['5/10/2005', 	1921.41],
    ['1/23/2005', 	2714.4],
    ['2/22/2005', 	3087.05],
    ['3/17/2005', 	5692.96],
    ['5/3/2005', 	3460.86],
    ['5/31/2005', 	1895.94],
    ['1/26/2005', 	1405.92],
    ['2/22/2005', 	2282.28],
    ['3/17/2005', 	8977.05],
    ['5/5/2005', 	3256.35],
    ['1/7/2005', 	4984.32],
    ['2/3/2005', 	5406.66],
    ['3/4/2005', 	3491.18],
    ['4/8/2005', 	2118.54],
    ['1/31/2005', 	4627.92],
    ['2/28/2005', 	1933.5],
    ['3/23/2005', 	2600.13],
    ['5/6/2005', 	2639.58],
    ['2/3/2005', 	3029.19],
    ['3/3/2005', 	10066.6],
    ['3/30/2005', 	4121.43],
    ['4/3/2005', 	1135.31],
    ['5/10/2005', 	2100.82],
    ['1/26/2005', 	4496.8],
    ['2/23/2005', 	6397.44],
    ['3/28/2005', 	2577.6],
    ['5/6/2005', 	3533.62],
    ['1/31/2005', 	2701.12],
    ['3/1/2005', 	2487.04],
    ['3/30/2005', 	3910.32],
    ['4/1/2005', 	4038.8],
    ['5/9/2005', 	3070.4],
    ['2/3/2005', 	3856.71],
    ['3/1/2005', 	3102.08],
    ['3/30/2005', 	1908.72],
    ['4/3/2005', 	7543.75],
    ['5/10/2005', 	2457.18],
    ['1/31/2005', 	2883.53],
    ['3/1/2005', 	5017.57],
    ['3/28/2005', 	1463],
    ['5/6/2005', 	2352.59],
    ['1/23/2005', 	4301.34],
    ['2/17/2005', 	1864.56],
    ['5/1/2005', 	3576.8],
    ['5/31/2005', 	3722.32],
    ['2/3/2005', 	1668.25],
    ['3/3/2005', 	7154.5],
    ['3/30/2005', 	2810.83],
    ['4/3/2005', 	2018.31],
    ['5/10/2005', 	5642.83],
    ['2/3/2005', 	5208.72],
    ['3/1/2005', 	3018.88],
    ['3/30/2005', 	1902.4],
    ['4/3/2005', 	7084],
    ['5/10/2005', 	2620.8],
    ['1/31/2005', 	3275.56],
    ['3/1/2005', 	4143.6],
    ['3/28/2005', 	5192.64],
    ['5/6/2005', 	3029.04],
    ['1/31/2005', 	4025.6],
    ['3/1/2005', 	2864.4],
    ['3/28/2005', 	3789.72],
    ['5/6/2005', 	2439.99],
    ['1/31/2005', 	2502.9],
    ['3/1/2005', 	3801.6],
    ['3/30/2005', 	3144.96],
    ['4/3/2005', 	2031.4],
    ['5/10/2005', 	2674.17],
    ['1/31/2005', 	1624.25],
    ['3/1/2005', 	4357.5],
    ['3/30/2005', 	1367.48],
    ['4/1/2005', 	1122.4],
    ['5/9/2005', 	2419.62],
    ['1/31/2005', 	3978.51],
    ['3/1/2005', 	5417.57],
    ['3/28/2005', 	2116.16],
    ['5/6/2005', 	3079.44]
   ];
   options = {    
   };
   width = 550;
   height = 400;

  ngOnInit(): void {
  }

}
