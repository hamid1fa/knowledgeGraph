import React from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const options = {
  plugins: {
    datalabels: {
      display: true,
      color: "black",
      align: "end",
      anchor: "end",
      font: { size: "14" }
    }
  },
  legend: {
    display: false
  },
  scales: { yAxes: { display: false },xAxes:[{gridLines:{color: "rgba(0,0,0,0)"}}]}
};


const state = {
  labels: ['Bank Account', 'Fixed Deposit', 'Regular Mutual Fund',
           'CRE'],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor:  'black',
      borderColor: 'black',
      //borderDashOffset: 0.1,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(0, 200, 129, 0.5)',
      pointBackgroundColor: '#fff',
      // pointBorderWidth: 2,
      // pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(0, 200, 129, 0.5)',
      pointHoverBorderColor: 'rgba(0, 200, 129, 0.5)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 0,
      data: [1.25 ,1.36 ,2.96 ,3.30]
    },  
  ]
}
function Graph() {

    return (
      <div>
        <Bar
          data={state}
          plugins={[ChartDataLabels]}
          options={ options
           }
           width={100} height={50}
        />
        
      </div>
    
    );
  }


export default Graph;