import React from "react";

function AppItem({name, image,status,port}){

    return (
        <a key={name} className="app" href={`http://127.0.0.1:${port}`} >
            <img src={image} alt="App logo"/>
            <div className='app-label'>
              <div className={`status ${status}`}></div>
              <span>{name}</span>
            </div>
        </a>
    );
}

export default AppItem;