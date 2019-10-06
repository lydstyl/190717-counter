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

  const randomColor = () => {
    return '#' + ((Math.random() * 0xffffff) << 0).toString(16);
  };

  counters.forEach(({ name, number }) => {
    data.labels.push(name);
    data.datasets[0].data.push(number);
    data.datasets[0].backgroundColor.push(randomColor());
    data.datasets[0].hoverBackgroundColor.push(randomColor());
  });

  return (
    <div className='chartBox'>
      <div className='chart'>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
