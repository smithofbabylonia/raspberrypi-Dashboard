import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Storage({server}){
  const [storage, setStorage] = useState({ total: '', used: '', free: '' });

  useEffect(() => {

    const fetchStorage = () =>{
      axios.get(`${server}/storage`)
        .then(response => setStorage(response.data))
        .catch(error => console.error('Error fetching storage data:', error));
    }
    fetchStorage();
    const interval = setInterval(fetchStorage,10000);
    return () => clearInterval(interval);
  }, [server]);

  return (
    <div className="storage">
      <h3>SD Card</h3>
      <div className="bar">
        <div className="used" style={{ width: `${(storage.used / storage.total) * 100}%` }}></div>
      </div>
      <p>{Math.round(storage.used/1048576)}GB of {Math.round(storage.total/1048576)}GB used</p>
    </div>
  );
};

export default Storage;