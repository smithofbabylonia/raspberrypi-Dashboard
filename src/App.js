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
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <div className="dashboard">
        <div className="section metrics">
          <CrescentTemperature title="Temp 2" />
          <Storage />
          <Ram />
          <NetworkActivity />
        </div>
        
        <div className="section apps">
          <ServerApps />
        </div>
      </div>
    </div>
  );
}

export default App;