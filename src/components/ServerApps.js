import React, { useEffect, useState } from 'react';
import AppItem from './AppItem';
import axios from 'axios';



function ServerApps(){

  const [activeApps, setActiveApps] = useState([
    { name: 'Pi-hole', status: 'green', image:'logo192.png' },
    { name: 'qBittorrent', status: 'green', image:'logo192.png' },
    { name: 'NginX', status: 'green', image:'logo192.png' },
    {name:'Phonebook',status:'orange', image:'logo192.png' },
    { name: 'SSH', status: 'green' , image:'logo192.png'},
    { name: 'JellyFin', status: 'red', image:'logo192.png' },
  ]);

  useEffect(()=>{
    axios.get("http://192.168.1.101:5000/status")
    .then(response => setActiveApps(response.data.app_info))
    .catch(error => console.error("An error occured: ", error))
  });

  return (
    <div className="server-apps">
      <h3>Them Apps</h3>
      <div className="apps-grid">
        {activeApps.map(app => (<AppItem name={app.name} image={app.image} port={80} status={app.status}/>))}
      </div>
    </div>
  );
};

export default ServerApps;