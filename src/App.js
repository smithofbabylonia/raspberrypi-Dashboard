import React from 'react';
import './App.css';
import Chart from 'chart.js/auto';

import Temperature from './components/Temperature';
import Storage from './components/Storage';
import Ram from './components/Ram';
import ServerApps from './components/ServerApps';
import NetworkActivity from './components/NetworkActivity';
import CrescentTemperature from './components/CrescentTemperature';

function App() {
  const server_link = "http://192.168.1.101:5000/api";
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <div className="dashboard">
        <div className="section metrics" server={server_link}>
          <CrescentTemperature title="Temp 2" server={server_link}/>
          <Storage server={server_link}/>
          <Ram server={server_link}/>
          <NetworkActivity server={server_link}/>
        </div>
        
        <div className="section apps">
          <ServerApps server={server_link}/>
        </div>
      </div>
    </div>
  );
}

export default App;