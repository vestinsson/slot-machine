// src/components/SlotMachine.js
import React, { useState, useCallback } from 'react';
import { SYMBOLS } from '../constants/gameConstants';
import Reel from './Reel';
import SpinButton from './SpinButton';
import WinDisplay from './WinDisplay';
import '../styles/SlotMachine.css';

const SlotMachine = () => {
  const [spinning, setSpinning] = useState(false);
  const [reelPositions, setReelPositions] = useState([0, 0, 0]);
  const [stoppedReels, setStoppedReels] = useState(0);
  const [isWinning, setIsWinning] = useState(false);

  const checkWin = (positions) => {
    // Get the actual symbols at the positions
    const reelSymbols = positions.map(pos => SYMBOLS[pos]);
    
    // Check for at least 2 matching symbols
    return (
      reelSymbols[0] === reelSymbols[1] ||
      reelSymbols[1] === reelSymbols[2] ||
      reelSymbols[0] === reelSymbols[2]
    );
  };

  const handleSpin = () => {
    setSpinning(true);
    setStoppedReels(0);
    setIsWinning(false);
    
    // Generate random stop positions
    const newPositions = reelPositions.map(() => 
      Math.floor(Math.random() * SYMBOLS.length)
    );
    setReelPositions(newPositions);
  };

  const handleReelStop = useCallback(() => {
    setStoppedReels(prev => {
      const newCount = prev + 1;
      if (newCount === 3) {
        setSpinning(false);
        setIsWinning(checkWin(reelPositions));
      }
      return newCount;
    });
  }, [reelPositions]);

  return (
    <div className="slot-machine">
      <div className="reels-container">
        {[0, 1, 2].map(index => (
          <Reel
            key={index}
            spinning={spinning}
            stopPosition={reelPositions[index]}
            onStop={handleReelStop}
          />
        ))}
      </div>
      <SpinButton onClick={handleSpin} disabled={spinning} />
      <WinDisplay isWinning={isWinning} />
    </div>
  );
};

export default SlotMachine;
