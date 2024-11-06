// src/App.js
import React from 'react';
import SlotMachine from './components/SlotMachine';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Casino Slots Game</h1>
      <SlotMachine />
    </div>
  );
};

export default App;
