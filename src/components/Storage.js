import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Storage = () => {
  const [storage, setStorage] = useState({ total: '', used: '', free: '' });

  useEffect(() => {
    axios.get('http://192.168.1.101:5000/api/storage')
      .then(response => setStorage(response.data))
      .catch(error => console.error('Error fetching storage data:', error));
  }, []);

  return (
    <div className="storage">
      <h3>SD Card</h3>
      <div className="bar">
        <div className="used" style={{ width: `${(storage.used / storage.total) * 100}%` }}></div>
      </div>
      <p>{storage.used}GB of {storage.total}GB used</p>
    </div>
  );
};

export default Storage;