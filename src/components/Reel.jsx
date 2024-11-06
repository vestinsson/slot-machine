// src/components/Reel.js
import React, { useEffect, useState, useRef } from 'react';
import { SYMBOLS, REEL_HEIGHT } from '../constants/gameConstants';
import '../styles/Reel.css';

const Reel = ({ spinning, stopPosition, onStop }) => {
  const [position, setPosition] = useState(0);
  const [speed, setSpeed] = useState(0);
  const reelRef = useRef(null);
  
  useEffect(() => {
    let animationFrame;
    let currentSpeed = speed;
    
    if (spinning) {
      currentSpeed = 50;
      setSpeed(currentSpeed);
      
      const animate = () => {
        setPosition(prev => (prev + currentSpeed) % REEL_HEIGHT);
        animationFrame = requestAnimationFrame(animate);
      };
      
      animationFrame = requestAnimationFrame(animate);
      
      setTimeout(() => {
        setSpeed(0);
        setPosition(stopPosition * 100);
        onStop();
      }, 1000 + Math.random() * 1000);
    }
    
    return () => cancelAnimationFrame(animationFrame);
  }, [spinning, stopPosition, onStop]);

  return (
    <div className="reel-container">
      <div 
        className="reel"
        ref={reelRef}
        style={{ transform: `translateY(-${position}px)` }}
      >
        {[...SYMBOLS, ...SYMBOLS].map((symbol, index) => (
          <div key={index} className="symbol">
            {symbol}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reel;
