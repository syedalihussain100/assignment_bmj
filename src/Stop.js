import React, { useState, useEffect } from 'react';
import "./Stop.css";

function Stop() {
    let time = new Date().toLocaleTimeString();
    const [mytime, setMyTime] = useState(time);


    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setMyTime(time)
    }

    useEffect(() => {
       setInterval(() => {
           updateTime()
       }, 1000);
       document.title = `Real Time ${mytime}`
    }, [])
    return (
        <div className='container'>
            <h2>Stop Watch</h2>

            <h1>{mytime}</h1>
            {/* <button onClick={updateTime}>Update Time</button> */}
        </div>
    )
}

export default Stop
