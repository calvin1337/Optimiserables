import React from 'react';
import UpcomingTitle from './UpcomingTitle';
import ShowDetails from './ShowDetails';
import {faFacebookSquare, faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const imagePath = require(`../../Images/baldo_bros.png`);

const Upcoming = () => (
  <div className="flex flex-col items-center w-screen h-screen"> 
    <div className="flex flex-col w-full md:w-5/6 h-full">
      <UpcomingTitle />
      <div className='flex flex-col lg:flex-row w-full h-4/5 p-4 gap-2'>
        
        {/* Image Container */}
        <div className='w-full lg:w-1/2 h-full flex flex-col gap-2'>
        <div className="w-full flex flex-col md:flex-col justify-center items-center h-2/5 md:h-4/5 relative">
          <div className="relative w-4/5 h-full border-4 border-[#6A3276]">
            <div className="backlight absolute top-0 left-0 right-0 bottom-0 z-[-1]"></div>
            <img
              src={imagePath}
              alt="Op Cover"
              className="hover-image object-fill w-full h-full mx-auto"
            />
            </div>
          </div>
           <div className='w-full'>
           <ul id="countdown" className="relative w-full mx-auto p-4 text-white border-y-2 border-[#6A3276] font-narrow font-bold flex justify-around">
              <li className="flex flex-col items-center">
                <div className="text-[6vw] md:text-[4vw] lg:text-[3vw]">00</div>
                <div className="label text-[#E4CC5D] text-[2vw] md:text-[1.5vw] uppercase">Days</div>
              </li>
              <li className="flex flex-col items-center">
                <div className="text-[6vw] md:text-[4vw] lg:text-[3vw]">00</div>
                <div className="label text-[#E4CC5D] text-[2vw] md:text-[1.5vw] uppercase">Hours</div>
              </li>
              <li className="flex flex-col items-center">
                <div className="text-[6vw] md:text-[4vw] lg:text-[3vw]">00</div>
                <div className="label text-[#E4CC5D] text-[2vw] md:text-[1.5vw] uppercase">Minutes</div>
              </li>
              <li className="flex flex-col items-center">
                <div className="text-[6vw] md:text-[4vw] lg:text-[3vw]">00</div>
                <div className="label text-[#E4CC5D] text-[2vw] md:text-[1.5vw] uppercase">Seconds</div>
              </li>
            </ul>
           </div>
        </div>
         {/* Content Container */}
         <div className='w-full lg:w-1/2 h-full flex flex-col gap-4 justify-center items-center'>
            <h2 className="text-xl sm:text-2xl lg:text-4xl">Edinburgh Fringe 2025</h2>
            <p className="text-xs sm:text-lg md:text-xl lg:text-2xl text-white w-full">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur at porro, deserunt cupiditate provident voluptas officiis minima distinctio id cumque magnam quidem vero excepturi sapiente tempore accusamus sed, deleniti, fuga itaque. Omnis et tempora tempore sint, officia veritatis repellat! Exercitationem.
            </p>
            <div className='w-1/2 items-center'>
              <button className="button">
                Get Notified
              </button>
            </div>
        </div>
       {/* Video Container */}
        <div className='w-full lg:w-1/3 h-full flex-col items-center justify-center gap-2 hidden'>
          <div className="w-full h-1/2">
          <iframe
            src="https://www.youtube.com/embed/"
            title="YouTube video player"
            className="w-full h-full"
          ></iframe>
        </div>
        <div className='p-4 md:p-0 flex flex-col text-center w-full'>
          <h3 className="text-xl sm:text-2xl lg:text-4xl">Check out more videos on our socials!</h3>
        {/* Social Links */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-5">
            <a
              href="https://www.instagram.com/optimiserables/"
              target="_blank"
              rel="noreferrer"
              className="socialLink w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" color="#ebbc52" />
            </a>
            <a
              href="https://x.com/Optimiserables"
              target="_blank"
              rel="noreferrer"
              className="socialLink w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center"
            >
              <FontAwesomeIcon icon={faFacebookSquare} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" color="#ebbc52" />
            </a>
            <a
              href="https://www.tiktok.com/@theoptimiserables?lang=en"
              target="_blank"
              rel="noreferrer"
              className="socialLink w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center"
            >
              <FontAwesomeIcon icon={faTiktok} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" color="#ebbc52" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61557637915188"
              target="_blank"
              rel="noreferrer"
              className="socialLink w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center"
            >
              <FontAwesomeIcon icon={faXTwitter} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" color="#ebbc52" />
            </a>
          </div>  
        </div>
      </div>

      </div>
    </div>
    </div>
);

export default Upcoming;
