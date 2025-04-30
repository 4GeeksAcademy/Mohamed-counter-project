import React, { useState, useEffect } from 'react';
import '../../styles/index.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const stop = () => setIsRunning(false);
    const reset = () => {
        setCount(0);
        setIsRunning(false);
    };
    const resume = () => setIsRunning(true);

    return (
        <div className="counter-container">
            <h1 className="counter-value">{count}</h1>
            <div className="counter-buttons">
                <button onClick={increment} className="counter-button">+</button>
                <button onClick={decrement} className="counter-button">-</button>
                <button onClick={stop} className="counter-button">Stop</button>
                <button onClick={reset} className="counter-button">Reset</button>
                <button onClick={resume} className="counter-button">Resume</button>
            </div>
        </div>
    );
};

export default Counter;