import React, { useState, useEffect } from 'react';
import '../../styles/index.css';

const Counter = () => {
    const [count, setCount] = useState(0);
   
    useEffect(() => {
        let interval;
            interval = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);
       
        return () => clearInterval(interval);
    }, []);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
   
    const reset = () => {
        setCount(0); 
    };
   
    return (
        <div className="counter-container">
            <h1 className="counter-value">{count}</h1>
            <div className="counter-buttons">
                <button onClick={increment} className="counter-button">+</button>
                <button onClick={decrement} className="counter-button">-</button>
                <button onClick={reset} className="counter-button">Reset</button>
                
            </div>
        </div>
    );
};

export default Counter;