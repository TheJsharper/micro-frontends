import React, { useContext } from 'react';
import './styles.css';
import logo from './logo.png';
import svg from './react.svg';
//import { type useAppContext } from '@Host '
import { useAppContext } from '../../host/src/hooks/use-appContext'
export function App() {
  const test = 'test';
  const { user, setUser } = useAppContext();
  return (
    <div>
      <h1>React products  -{process.env.NODE_ENV}</h1>
      <img src={logo} alt="Placeholder" width="50" height="50" />
      <img src={svg} alt="Placeholder" width="50" height="50" />
      <p>Welcome to the React template!</p>

      <div>
        <h1>User: {user || 'Guest'}</h1>
        <button onClick={() => setUser('John Doe')}>Set User</button>
      </div>
    </div>
  );
}