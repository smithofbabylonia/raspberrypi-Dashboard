import React from 'react';

const apps = [
  { name: 'Pi-hole', status: 'green' },
  { name: 'qBittorrent', status: 'green' },
  { name: 'NginX', status: 'green' },
  { name: 'SSH', status: 'green' },
  { name: 'JellyFin', status: 'red' },
];

const ServerApps = () => {
  return (
    <div className="server-apps">
      <h3>Your Apps</h3>
      <div className="apps-grid">
        {apps.map(app => (
          <div key={app.name} className="app">
            <div className={`status ${app.status}`}></div>
            <span>{app.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServerApps;