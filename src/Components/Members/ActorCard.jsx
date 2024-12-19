import React from 'react';
import "../../Components/Misc/Effects/Backlight/Backlight.css"

import {faFacebookSquare, faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ActorCard = ({ actor }) => {
  const imagePath = require(`../../Images/Members/${actor.image}`);
  
  return (
  <div className="flex flex-col md:flex-row gap-5 h-4/5 items-center justify-center w-full">
  {/* Image Container with Background Effect */}
  <div className="w-full md:w-1/2 flex flex-col md:flex-col justify-center items-center h-2/5 md:h-4/5 relative md-p-10">
    <div className="relative w-4/5 h-full">
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
          className="socialLink w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl" color="#ebbc52" />
        </a>
        <a
          href="https://x.com/Optimiserables"
          target="_blank"
          rel="noreferrer"
          className="socialLink w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center"
        >
          <FontAwesomeIcon icon={faFacebookSquare} className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl" color="#ebbc52" />
        </a>
        <a
          href="https://www.tiktok.com/@theoptimiserables?lang=en"
          target="_blank"
          rel="noreferrer"
          className="socialLink w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center"
        >
          <FontAwesomeIcon icon={faTiktok} className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl" color="#ebbc52" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61557637915188"
          target="_blank"
          rel="noreferrer"
          className="socialLink w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center"
        >
          <FontAwesomeIcon icon={faXTwitter} className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl" color="#ebbc52" />
        </a>
      </div>
      </div>
  </div>

  {/* Content Container */}
  <div className="w-full md:w-1/2 flex h-2/5 md:h-full md:pt-10 ">
    <div className="p-4 flex flex-col text-center gap-2 w-full h-full ">
      
      
      <div className="flex-1 flex items-start flex-col text-justify">
      <h2 className='text-left text-sm sm:text-xl md:text-2xl lg:text-3xl'>About</h2>
        <p className="text-xs sm:text-base md:text-l xl:text-xl text-white w-full md:text-left md:pl-5">
          {actor.description}
        </p>
      </div>

      
      <div className="flex-1 flex items-start flex-col">
      <h2 className='text-left text-sm sm:text-xl md:text-2xl lg:text-3xl'>Credits</h2>
      <ul className="text-xs sm:text-base md:text-lg lg:text-xl text-white w-full text-left md:pl-5">
      {actor.credits.map((credit, index) => (
        <li className="text-xs sm:text-base md:text-l xl:text-xl text-white w-full text-left" key={index}>
          {credit}
        </li>
      ))}
    </ul>
      </div>
      
    </div>
  </div>
</div>


    
  );
};

export default ActorCard;