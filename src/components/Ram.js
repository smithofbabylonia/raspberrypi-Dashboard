import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Ram({server}){
  const [ram, setRam] = useState({ total: 1846, used: 1720, free: 126 });

  useEffect(() => {
    // Function to fetch RAM data
    const fetchRamData = () => {
      axios.get(`${server}/ram`)
        .then(response => setRam(response.data))
        .catch(error => console.error('Error fetching RAM data:', error));
    };

    // Fetch immediately when the component mounts
    fetchRamData();

    // Set up an interval to fetch data every 10 seconds
    const interval = setInterval(fetchRamData, 10000); // 10,000ms = 10 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [server]); // The server URL is a dependency

  return (
    <div className="ram">
      <h3>RAM</h3>
      <div className="bar">
        <div className="used" style={{ width: `${(ram.used / ram.total) * 100}%` }}></div>
      </div>
      <p>{ram.used}MB of {ram.total}MB used</p>
    </div>
  );
}

export default Ram;
