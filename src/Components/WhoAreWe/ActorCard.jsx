import React from 'react';
import Backlight from '../Misc/Effects/Backlight/Backlight';

const ActorCard = ({ actor }) => {
  const imagePath = require(`../../Images/Members/${actor.image}`);
  
  return (
    <div className="w-full p-4 flex justify-center flex-col border-2 border-white md:flex-row md:justify-between">
 
      <div className="md:w-1/2 p-4 border-2 border-white flex flex-col justify-evenly text-center md:text-left order-1 md:-order-last">
        <h1 className="text-xl sm:text-4xl lg:text-6xl">{actor.name}</h1>
        <p className="text-xs sm:text-lg md:text-xl lg:text-2xl text-white w-full md:w-4/5">
          {actor.description}
        </p>
      </div>
      <Backlight>
        <img
          src={imagePath}
          alt={actor.name}
          className="hover-image w-3/4 h-60 object-contain sm:w-full sm:h-80 md:h-96 lg:h-[500px] mx-auto"
        />
      </Backlight>
    </div>
  );
};

export default ActorCard;
