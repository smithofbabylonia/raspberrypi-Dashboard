import React from 'react';
import AppItem from './AppItem';


const apps = [
  { name: 'Pi-hole', status: 'green', image:'logo192.png' },
  { name: 'qBittorrent', status: 'green', image:'logo192.png' },
  { name: 'NginX', status: 'green', image:'logo192.png' },
  {name:'Phonebook',status:'orange', image:'logo192.png' },
  { name: 'SSH', status: 'green' , image:'logo192.png'},
  { name: 'JellyFin', status: 'red', image:'logo192.png' },
];

const ServerApps = () => {
  return (
    <div className="server-apps">
      <h3>Them Apps</h3>
      <div className="apps-grid">
        {apps.map(app => (<AppItem name={app.name} image={app.image} port={80} status={app.status}/>))}
      </div>
    </div>
  );
};

export default ServerApps;