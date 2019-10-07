import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Chart = ({ counters }) => {
  const data = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        hoverBackgroundColor: []
      }
    ]
  };

  const options = {
    legend: {
      labels: {
        fontColor: 'black',
        fontSize: 18
      }
    }
  };

  counters.forEach(counter => {
    const { name, number, color } = counter;

    data.labels.push(name);
    data.datasets[0].data.push(number);
    data.datasets[0].backgroundColor.push(color);
    data.datasets[0].hoverBackgroundColor.push(color);
  });

  return counters.length ? (
    <div className='chartBox'>
      <div className='chart'>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  ) : null;
};

export default Chart;
