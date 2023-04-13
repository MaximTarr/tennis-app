import React, { useState, useEffect } from 'react';

import s from "./Clock.module.scss"

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const updateCurrentTime = () => {
            setCurrentTime(new Date());
        };

        const intervalId = setInterval(updateCurrentTime, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const formattedTime = currentTime.toLocaleTimeString();

    return (
        <div className={s.timeDiv}>
            <h1 className={s.time}>{formattedTime}</h1>
        </div>
    );
};

export default Clock;