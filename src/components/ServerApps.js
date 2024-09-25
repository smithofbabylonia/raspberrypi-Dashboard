import React, { useEffect, useState } from 'react';
import AppItem from './AppItem';
import axios from 'axios';



function ServerApps({server}){

  const [activeApps, setActiveApps] = useState([
    { name: 'Pi-hole', status: 'green', image:'logo192.png', port:'locahost:80' },
    { name: 'qBittorrent', status: 'green', image:'logo192.png', port:'locahost:80' },
    { name: 'NginX', status: 'green', image:'logo192.png', port:'locahost:80' },
    {name:'Phonebook',status:'orange', image:'logo192.png', port:'locahost:80' },
    { name: 'SSH', status: 'green' , image:'logo192.png', port:'locahost:80' },
    { name: 'JellyFin', status: 'red', image:'logo192.png', port:'locahost:80' },
    { name: 'Handbrake', status: 'red', image:'logo192.png', port:'locahost:80' },
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

    const interval = setInterval(getData, 60000);

    return () => clearInterval(interval);

  }, [server]);

  return (
    <div className="server-apps blur">
      <h3>Them Apps</h3>
      <div className="apps-grid">
        {activeApps.map(app => (<AppItem key={app.name} name={app.name} image={app.image} port={app.port} status={app.status}/>))}
      </div>
    </div>
  );
};

export default ServerApps;