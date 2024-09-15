import React from 'react';
import './App.css';

import Storage from './components/Storage';
import Ram from './components/Ram';
import ServerApps from './components/ServerApps';
import CrescentTemperature from './components/CrescentTemperature';

function App() {
  const server_link = "http://127.0.0.1:5000/api";
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <div className='diff'/>
      <div className="dashboard">
        <div className="section metrics" server={server_link}>
          <CrescentTemperature title="Temp 2" server={server_link}/>
          <Storage server={server_link}/>
          <Ram server={server_link}/>
        </div>
        
        <div className="section apps">
          <ServerApps server={server_link}/>
        </div>
      </div>
    </div>
  );
}

export default App;