import React from 'react';
import Backlight from '../Misc/Effects/Backlight/Backlight';
import {faFacebookSquare, faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OPCard = ({ actor }) => {
  const imagePath = require(`../../Images/Members/optimiserablesframe1.png`);
  
  return (
    <div className="flex flex-col md:flex-row gap-5 h-screen sm:items-center justify-center pt-20 sm:pt-0">
    {/* Image Container */}
    <div className="w-full md:w-1/2 flex justify-center items-center">

    {/* 
    
    Backlight causes sizing issues with the images
    
    */}
    
      <Backlight>
        <img
          src={imagePath}
          alt="Op Cover"
          className="hover-image object-cover w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl h-auto mx-auto"
        />
      </Backlight>
    </div>
  
    {/* Content Container */}
    <div className="w-full md:w-1/2 flex justify-center">
      <div className="p-4 flex flex-col text-center md:text-left gap-5 w-full">
        <h1 className="text-xl sm:text-4xl lg:text-6xl">Who Are The Optimiserables?</h1>
        <p className="text-xs sm:text-lg md:text-xl lg:text-2xl text-white w-full">
          "We the Optimiserables agree that out there in the big wide world that it is indeed a bit naff. While we can't cure all known diseases or solve verbal disagreements in regards to pizza toppings, our goal is to take you on a trip and laugh about the simple things in life."
        </p>
  
        {/* Social Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-5">
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
  </div>
  


  

  );
};

export default OPCard;
