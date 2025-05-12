import React from 'react';
import { useAppContext } from '.';
export const Counter = () => {
    const [count, setCount] = React.useState(0);
    const { user, setUser } = useAppContext();
    return (
        <div>
            <div className="counter">
                <h1>Counter</h1>
                <p>{count}</p>
                <button onClick={() => setCount(c => c + 1)} >Count++</button>
            </div>
            
            <div>
            <h1>User: {user || 'Guest'}</h1>
            <button onClick={() => setUser('John Doe')}>Set User</button>
            </div>
        </div>
    );
};