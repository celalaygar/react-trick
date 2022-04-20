import React, { useEffect, useState } from 'react';

function SidebarComponent() {
    const [sideBarTitle, setsideBarTitle] = useState("SideBar Title");
    const [timer, setTimer] = useState(0);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        let counter;
        if (toggle) {
            counter = setInterval(() => setTimer(timer => timer + 1), 1000);
        }
        return () => {
            clearInterval(counter);
        };
    }, [toggle]);

    const handleStart = () => {
        setToggle(true);
    };

    const handleStop = () => {
        setToggle(false);
    };

    const handleReset = () => {
        setTimer(0);
        setToggle(false);
    };
    return (
        <>
            <div className='border border-secondary rounded pt-2 p-3 mt-3'>
                Side Bar : {sideBarTitle}
            </div>
            <hr />
            <p>Current timer - {timer}</p>
            <hr />
            <button onClick={handleStart}>Start</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}

export default SidebarComponent
