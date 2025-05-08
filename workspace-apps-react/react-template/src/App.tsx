import React from 'react';
import './styles.css';
import logo from './logo.png';
import svg from './react.svg';
import { Counter } from './Counter';
export const App = () => {
  const test = 'test';
  return (
    <div>
      <h1>React Edited Template  -{process.env.NODE_ENV}-{process.env.name}</h1>
      <img src={logo} alt="Placeholder"  width="50" height="50"/>
      <img src={svg} alt="Placeholder"  width="50" height="50"/>
      <p>Welcome to the React template!</p>
      <Counter />
    </div>
  );
}