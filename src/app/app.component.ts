import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { chart, SolidGaugeChart } from 'highcharts';
import * as Highcharts from 'highcharts';
import * as solidGauge from 'highcharts/modules/solid-gauge.src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Gauge Example App';

  @ViewChild('chartTarget')
  chartTarget: ElementRef;
  options: any;
  chart: Highcharts.ChartObject;

  ngOnInit() {}

  ngAfterViewInit() {
    this.initOptions();
    this.chart = chart(this.chartTarget.nativeElement, this.options as any);
  }

  initOptions() {
    this.options = {
      chart: {
        type: 'solidgauge'
      },
      title: {
        text: 'Highchart Gauge'
      },
      pane: {
        center: ['50%', '85%'],
        size: '120%',
        startAngle: -90,
        endAngle: 90,
        background: {
          backgroundColor: 'white',
          innerRadius: '60%',
          outerRadius: '100%',
          shape: 'arc'
        }
      },
      tooltip: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      // color of bar based on data
      yAxis: {
        stops: [
          [0.35, '#28a745'], // green
          [0.65, 'yellow'], // yellow
          [1.00, '#dc3545'] // red
        ],
        fillOpacity: 1,
        showFirstLabel:false,
        showLastLabel:false,
        length: 5,
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
          y: 0
        },
        labels: {
          y: 0
        },
        min: 0,
        max: 100,
        // outer bands marking ranges
        plotBands: [
          { from: 0, to: 35, color: '#28a745' },
          { from: 35, to: 65, color: 'yellow' },
          { from: 65, to: 100, color: '#dc3545' }
        ]
      },
      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: 5,
            borderWidth: 0,
            useHTML: true
          }
        }
      },
        series: [{
            name: 'Speed',
            data: [20],
            fillOpacity: 1,
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ('black') + '">{y}%</span><br/>' +
                       '<span style="font-size:12px;color:silver">&nbsp;</span></div>'
            },
            tooltip: {
                valueSuffix: '%'
            }
        }]
    };
  }
}
