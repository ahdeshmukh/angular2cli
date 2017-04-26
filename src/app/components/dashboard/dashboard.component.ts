import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pieChartOptions: any;
  lineChartOptions: any;
  columnChartOptions: any;
  geoChartOptions: any;

  constructor() { }

  ngOnInit() {
    this.pieChartOptions =  {
      chartType: 'PieChart',
      dataTable: [
        ['Revenue', ''],
        ['Sales', 40],
        ['Marketing', 40],
        ['IT', 15],
        ['HR', 5]
      ],
      options: {
        'is3D': true, 
        'width': 555, 
        'height': 400,
        'title': 'REVENUES',
        'titleTextStyle': {
          'fontSize': 18
        }
      }
    };
    
    this.lineChartOptions = {
      chartType: 'LineChart',
      dataTable: [
        ['Month', '2016', '2017'],
        ['Jan', 1100, 1200],
        ['Feb', 1000, 1100],
        ['March', 900, 1000],
        ['April', 800, 700],
        ['May', 1050, 1200],
        ['June', 1200, 1400],
        ['July', 1300, 1500],
        ['Aug', 1400, 1600],
        ['Sep', 1400, 1450],
        ['Oct', 1600, 1800],
        ['Nov', 1700, 1900],
        ['Dec', 1800, 2000],
      ],
      options: {
        'width': 555, 
        'height': 400,
        'title': 'COMPAY PERFORMANCE',
        'titleTextStyle': {
          'fontSize': 18
        }
      }
    };

    this.columnChartOptions = {
      chartType: 'ColumnChart',
      dataTable: [
        ['Country', '2016', '2017'],
        ['USA', 700, 1200],
        ['Canada', 500, 1100],
        ['France', 600, 1000],
        ['Germany', 300, 600],
        ['England', 400, 500]
      ],
      options: {
        'width': 555, 
        'height': 400,
        'title': 'TOP 5 COUNTRIES 2017',
        'titleTextStyle': {
          'fontSize': 18
        }
      }
    };

    this.geoChartOptions = {
      chartType: 'GeoChart',
      dataTable: [
        ['Country', 'Popularity'],
        ['Germany', 700],
        ['United States', 2000],
        ['United Kingdom', 600],
        ['Canada', 1000],
        ['France', 800],
        ['Russia', 400],
        ['India', 300],
        ['China', 200],
        ['Brazil', 200]
      ],
      options: {
        'width': 555, 
        'height': 400,
        'title': 'COUNTRIES WITH AT LEAST 200 DAILY VISITS',
        'titleTextStyle': {
          'fontSize': 18
        }
      }
    }

  }

}
