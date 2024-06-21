import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Storage({server}){
  const [storage, setStorage] = useState({ total: '', used: '', free: '' });

  useEffect(() => {
    axios.get(`${server}/storage`)
      .then(response => setStorage(response.data))
      .catch(error => console.error('Error fetching storage data:', error));
  }, []);

  return (
    <div className="storage">
      <h3>SD Card</h3>
      <div className="bar">
        <div className="used" style={{ width: `${(storage.used / storage.total) * 100}%` }}></div>
      </div>
      <p>{storage.used/1048576}GB of {storage.total/1048576}GB used</p>
    </div>
  );
};

export default Storage;