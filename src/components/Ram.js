import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Ram({server}){
  const [ram, setRam] = useState({ total: 1846, used: 1720, free: 126 });

  useEffect(() => {
    axios.get(`${server}/ram`)
      .then(response => setRam(response.data))
      .catch(error => console.error('Error fetching RAM data:', error));
  });

  return (
    <div className="ram">
      <h3>RAM</h3>
      <div className="bar">
        <div className="used" style={{ width: `${(ram.used / ram.total) * 100}%` }}></div>
      </div>
      <p>{ram.used}GB of {ram.total}GB used</p>
    </div>
  );
};

export default Ram;