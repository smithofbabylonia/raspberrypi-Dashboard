import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: Array.from({ length: 60 }, (_, i) => i), // last 60 seconds
  datasets: [
    {
      label: 'Download',
      data: Array(60).fill(1), // Placeholder data
      borderColor: 'blue',
      borderWidth: 1,
      fill: false,
    },
    {
      label: 'Upload',
      data: Array(60).fill(0), // Placeholder data
      borderColor: 'red',
      borderWidth: 1,
      fill: false,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
      max: 20,
    },
  },
};

function NetworkActivity({server}){
  return (
    <div className="network-activity">
      <h3>Wlan0</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default NetworkActivity;