import React, { useState, useEffect } from 'react';

import './sidebar-clock.styles.css';

const SidebarClock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        setInterval( () => setCurrentTime(new Date()), 1000);
    }, []);
    
    return (
        <span className="sidebar-clock">{`${currentTime.toLocaleDateString()} ${currentTime.toLocaleTimeString()}`}</span>
    );
}

export default SidebarClock;