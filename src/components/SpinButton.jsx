// src/components/SpinButton.js
import React from 'react';
import '../styles/SpinButton.css';

const SpinButton = ({ onClick, disabled }) => {
  return (
    <button 
      className={`spin-button ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      SPIN
    </button>
  );
};

export default SpinButton;
