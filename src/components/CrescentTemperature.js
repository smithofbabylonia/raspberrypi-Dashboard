import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CrescentTemperature = ({ title, server }) => {
  const [temperature, setTemperature] = useState(64);

  useEffect(() => {
    axios.get(`${server}/temperature`)
      .then(response => setTemperature(response.data.temperature))
      .catch(error => console.error('Error fetching temperature data:', error));
  }, []);

  // Calculate the percentage for the gauge
  const percentage = (temperature / 100) * 100;

  // Gradient colors for the temperature gauge
  const gradientStyles = buildStyles({
    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
    trailColor: '#d6d6d6',
    strokeLinecap: 'butt',
    pathTransitionDuration: 0.5,
    pathTransition: 'stroke-dashoffset 0.5s ease 0s',
    
  });

  return (
    <div className="crescent-temperature">
      <h3>{title}</h3>
      <CircularProgressbar
        value={percentage}
        text={`${temperature}°C`}
        styles={gradientStyles}
        strokeWidth={10}
        circleRatio={1}
        
      />
    </div>
  );
};

export default CrescentTemperature;
