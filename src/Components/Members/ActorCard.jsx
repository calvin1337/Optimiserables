import React from 'react';
import Backlight from '../Misc/Effects/Backlight/Backlight';
import "../../Components/Misc/Effects/Backlight/Backlight.css"

import {faFacebookSquare, faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ActorCard = ({ actor }) => {
  const imagePath = require(`../../Images/Members/${actor.image}`);
  
  return (
  <div className="flex flex-col md:flex-row gap-5 h-4/5 sm:items-center justify-center w-full">
  {/* Image Container with Background Effect */}
  <div className="w-full md:w-1/2 flex flex-col md:flex-col justify-center items-center h-2/5 md:h-4/5 relative p-10">
    <div className="relative w-full h-full">
      <div className="backlight absolute top-0 left-0 right-0 bottom-0 z-[-1]"></div>
      <img
        src={imagePath}
        alt="Op Cover"
        className="hover-image object-fill w-full h-full mx-auto"
      />
    </div>
    {/* Social Container */}
    <div className='flex flex-col gap-2'>
    <h1 className="text-xl sm:text-4xl xl:text-5xl">{actor.name}</h1>
      
      <div className="flex flex-wrap justify-center items-center gap-6">
        <a
          href="https://www.instagram.com/optimiserables/"
          target="_blank"
          rel="noreferrer"
          className="socialLink w-12 h-12 flex justify-center items-center"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" color="#ebbc52" />
        </a>
        <a
          href="https://x.com/Optimiserables"
          target="_blank"
          rel="noreferrer"
          className="socialLink w-12 h-12 flex justify-center items-center"
        >
          <FontAwesomeIcon icon={faFacebookSquare} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" color="#ebbc52" />
        </a>
        <a
          href="https://www.tiktok.com/@theoptimiserables?lang=en"
          target="_blank"
          rel="noreferrer"
          className="socialLink w-12 h-12 flex justify-center items-center"
        >
          <FontAwesomeIcon icon={faTiktok} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" color="#ebbc52" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61557637915188"
          target="_blank"
          rel="noreferrer"
          className="socialLink w-12 h-12 flex justify-center items-center"
        >
          <FontAwesomeIcon icon={faXTwitter} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" color="#ebbc52" />
        </a>
      </div>
      </div>
  </div>

  {/* Content Container */}
  <div className="w-full md:w-1/2 flex justify-center md:items-start h-3/5 md:h-full pt-10">
    <div className="p-4 flex flex-col text-center gap-2 w-full">
      
      <h2 className='text-left text-sm sm:text-1xl md:text-2xl lg:text-3xl'>About:</h2>
      <p className="text-xs sm:text-base md:text-xl lg:text-2xl text-white w-full md:text-left">
        {actor.description}
      </p>
      <h2 className='text-left text-sm sm:text-1xl md:text-2xl lg:text-3xl'>Credits:</h2>
      <p className="text-xs sm:text-base md:text-xl lg:text-2xl text-white w-full md:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aut eaque, sunt corrupti cumque nisi ab pariatur doloribus at dolore.
      </p>
    </div>
  </div>
</div>


    
  );
};

export default ActorCard;