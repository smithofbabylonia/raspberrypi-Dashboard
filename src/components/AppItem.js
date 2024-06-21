import React from "react";

function AppItem({name, image,status,port}){

    return (
        <a key={name} className="app" href={`http://192.168.0.101:${port}`} target="_blank">
            <img src={image}/>
            <div className='app-label'>
              <div className={`status ${status}`}></div>
              <span>{name}</span>
            </div>
        </a>
    );
}

export default AppItem;