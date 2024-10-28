import React, { useState } from "react";
import "./ActorCard.css"

const ActorCard = ({ imageUrl }) => {
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const { offsetWidth: width, offsetHeight: height } = card;
    const { offsetX, offsetY } = e.nativeEvent;
    const x = Math.abs(Math.floor((100 / width) * offsetX) - 100);
    const y = Math.abs(Math.floor((100 / height) * offsetY) - 100);

    setGradientPos({ x: 50 + (x - 50) / 1.5, y: 50 + (y - 50) / 1.5 });
  };

  return (
    <div
      className="actor-card"
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage: `url(${imageUrl})`,
        "--gradient-x": `${gradientPos.x}%`,
        "--gradient-y": `${gradientPos.y}%`,
      }}
    >
    
    </div>
  );
};

export default ActorCard;
