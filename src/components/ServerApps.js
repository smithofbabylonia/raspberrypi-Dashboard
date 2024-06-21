import React, { useEffect, useState } from 'react';
import AppItem from './AppItem';
import axios from 'axios';



function ServerApps({server}){

  const [activeApps, setActiveApps] = useState([
    { name: 'Pi-hole', status: 'green', image:'logo192.png' },
    { name: 'qBittorrent', status: 'green', image:'logo192.png' },
    { name: 'NginX', status: 'green', image:'logo192.png' },
    {name:'Phonebook',status:'orange', image:'logo192.png' },
    { name: 'SSH', status: 'green' , image:'logo192.png'},
    { name: 'JellyFin', status: 'red', image:'logo192.png' },
  ]);

  useEffect(()=>{

    async function getData(){
      try{
        const response = await axios.get(`${server}/status`);
        setActiveApps(response.data);
      }catch(err){
        console.error(err.message);
      }
    }

    getData();

    const interval = setInterval(getData, 10000);

    return () => clearInterval(interval);

  });

  return (
    <div className="server-apps">
      <h3>Them Apps</h3>
      <div className="apps-grid">
        {activeApps.map(app => (<AppItem key={app.name} name={app.name} image={app.image} port={80} status={app.status}/>))}
      </div>
    </div>
  );
};

export default ServerApps;