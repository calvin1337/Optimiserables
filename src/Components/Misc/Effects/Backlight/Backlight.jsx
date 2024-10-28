import React from 'react';
import './Backlight.css'; 

const Backlight = ({ children }) => {
  return (
    <div className="relative">
      <div className="backlight"></div>
      {children} 
    </div>
  );
};

export default Backlight;
