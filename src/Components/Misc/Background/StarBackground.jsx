import React from 'react';
import './StarBackground.css';

const getRandomBoxShadow = (n) => {
  const shadows = [];
  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    shadows.push(`${x}px ${y}px #FFF`);
  }
  return shadows.join(', ');
};

const StarBackground = () => {
  const starsStyle = { boxShadow: getRandomBoxShadow(700) };
  const stars2Style = { boxShadow: getRandomBoxShadow(200) };
  const stars3Style = { boxShadow: getRandomBoxShadow(100) };

  return (
    <div className="background">
      <div id="stars" style={starsStyle}></div>
      <div id="stars2" style={stars2Style}></div>
      <div id="stars3" style={stars3Style}></div>
    </div>
  );
};

export default StarBackground;
