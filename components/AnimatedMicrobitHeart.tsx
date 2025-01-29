import React, { useState, useEffect } from 'react';

const AnimatedMicrobit = () => {
  const [isFirstFrame, setIsFirstFrame] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFirstFrame(prev => !prev);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[280px] h-[240px] mx-auto">
      {/* Base microbit image */}
      <img 
        src="/microbit-board.png" 
        alt="Microbit board"
        className="absolute top-0 left-0 w-full h-full object-contain"
      />
      
      {/* Heart pattern overlay */}
      <img 
        src={isFirstFrame ? "/heart-pattern-1.png" : "/heart-pattern-2.png"}
        alt="LED pattern"
        className="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-300"
      />
    </div>
  );
};

export default AnimatedMicrobit;