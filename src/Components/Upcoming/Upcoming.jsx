import React, { useState, useEffect } from 'react';
import UpcomingTitle from './UpcomingTitle';
import ShowDetails from './ShowDetails';
import { faFacebookSquare, faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const imagePath = require(`../../Images/Members/optimiserablesframe1.png`);

const calculateTimeLeft = () => {
  const difference = +new Date('2025-04-19') - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

const Upcoming = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-col items-center w-screen h-screen md:"> 
      <div className="flex flex-col w-full md:w-5/6 h-full pt-5 pb-5">
        <UpcomingTitle />
        <div className='flex flex-col md:flex-row w-full h-4/5 md:p-4 gap-5 md:items-center'>
          
          {/* Image Container */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-col justify-center items-center h-2/5 md:h-4/5 relative md:p-10">
            <div className="relative w-4/5 h-full">
              <div className="backlight absolute top-0 left-0 right-0 bottom-0 z-[-1]"></div>
              <img
                src={imagePath}
                alt="Op Cover"
                className="hover-image object-fill w-full h-full mx-auto"
              />
            </div>
            <div className='w-full h-1/5'>
              <ul id="countdown" className="relative w-full mx-auto p-4 text-white border-y-2 border-[#6A3276] font-narrow font-bold flex justify-around">
                <li className="flex flex-col items-center">
                  <div className="text-[3vw] md:text-[4vw] lg:text-[3vw]">{timeLeft.days || '00'}</div>
                  <div className="label text-[#E4CC5D] text-[2vw] md:text-[1.5vw] uppercase">Days</div>
                </li>
                <li className="flex flex-col items-center">
                  <div className="text-[3vw] md:text-[4vw] lg:text-[3vw]">{timeLeft.hours || '00'}</div>
                  <div className="label text-[#E4CC5D] text-[2vw] md:text-[1.5vw] uppercase">Hours</div>
                </li>
                <li className="flex flex-col items-center">
                  <div className="text-[3vw] md:text-[4vw] lg:text-[3vw]">{timeLeft.minutes || '00'}</div>
                  <div className="label text-[#E4CC5D] text-[2vw] md:text-[1.5vw] uppercase">Minutes</div>
                </li>
                <li className="flex flex-col items-center">
                  <div className="text-[3vw] md:text-[4vw] lg:text-[3vw]">{timeLeft.seconds || '00'}</div>
                  <div className="label text-[#E4CC5D] text-[2vw] md:text-[1.5vw] uppercase">Seconds</div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Content Container */}
          <div className='w-full md:w-1/2 h-2/5 sm:h-1/2 md:h-4/5 flex flex-col gap-4 justify-end md:justify-center items-center'>
            <h2 className="text-xl md:text-2xl lg:text-4xl">Edinburgh Fringe 2025</h2>
            <p className="text-xs sm:text-lg md:text-xl lg:text-2xl text-white w-full">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur at porro, deserunt cupiditate provident voluptas officiis minima distinctio id cumque magnam quidem vero excepturi sapiente tempore accusamus sed, deleniti, fuga itaque. Omnis et tempora tempore sint, officia veritatis repellat! Exercitationem.
            </p>
            <a href="/" target="_blank" rel="noopener noreferrer" className="text-white py-1 px-2 md:py-2 md:px-4 rounded hover:opacity-80" style={{ backgroundColor: "#6A3276" }}>
              Get Notified
            </a>
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
};

export default Upcoming;
