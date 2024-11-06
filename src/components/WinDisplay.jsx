// src/components/WinDisplay.js
import React from 'react';
import '../styles/WinDisplay.css';

const WinDisplay = ({ isWinning }) => {
  if (!isWinning) return null;
  
  return (
    <div className="win-display">
      🎉 WINNER! 🎉
    </div>
  );
};

export default WinDisplay;
