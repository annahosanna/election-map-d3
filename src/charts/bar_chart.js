var Highcharts = require('highcharts');

class BarChart {
  constructor(data, element) {

   Highcharts.chart('ec-chart', {
           chart: {
             type: 'bar'
           },
           colors: ['red', 'grey', 'blue'],
           title: {
               text: ''
           },
           xAxis: {
               categories: ['Actual Votes', 'Population Adjusted', 'Proportional']
           },
           yAxis: {
               min: 0,
               title: {
                   text: 'Electoral College Votes'
               },
               labels: {
                  enabled: false
               },
               gridLineWidth: 0
           },
           legend: {
               reversed: true
           },
           plotOptions: {
               series: {
                   stacking: 'normal'
               }
           },
           series: [{
               name: 'Republican',
               data: [305, 302, 257]
           },
           {
               name: 'Other',
               data: [0, 0, 24]
           },
           {
               name: 'Democratic',
               data: [233, 234, 260]
           }]
       });
  }
}

module.exports = BarChart