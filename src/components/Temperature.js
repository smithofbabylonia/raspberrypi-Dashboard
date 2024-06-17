import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Temperature = ({ title }) => {
  const [temperature, setTemperature] = useState(34);

  useEffect(() => {
    axios.get('/api/temperature')
      .then(response => setTemperature(response.data.temperature))
      .catch(error => console.error('Error fetching temperature data:', error));
  }, []);

  return (
    <div className="temperature">
      <h3>{title}</h3>
      <div className="gauge">
        <div className="circle">
          <div className="temperature-value">{temperature}°C</div>
        </div>
      </div>
    </div>
  );
};

export default Temperature;