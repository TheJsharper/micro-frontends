import React from 'react';
export const Counter = () => {
    const [count, setCount] = React.useState(0);
    return (
        <div className="counter">
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={() => setCount(c => c + 1)} >Count++</button>
        </div>
    );
};