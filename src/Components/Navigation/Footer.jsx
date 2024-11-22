import React from 'react';
import {faFacebookSquare, faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className="footer w-screen bg-[#090A0F]  text-white flex flex-col md:flex-row justify-evenly items-start">
      {/* Socials Section */}
      {/* <div className="socials mb-6 md:mb-0">
        <h2 className="text-lg font-semibold mb-4">Socials</h2>
        <div className="flex flex-col gap-3">
          <div className="flex items-center">
            <h3 className="mr-2 font-medium">Michael Garden</h3>
            <p>Icons for Michael's socials</p>
          </div>
          <div className="flex items-center">
            <h3 className="mr-2 font-medium">John Doe</h3>
            <p>Icons for John's socials</p>
          </div>
          <div className="flex items-center">
            <h3 className="mr-2 font-medium">Jane Smith</h3>
            <p>Icons for Jane's socials</p>
          </div>
        </div>
      </div> */}

  {/* Contact Section */}
  <div className="h-full ">
        <h2 className="text-lg font-semibold ">Contact</h2>
        <h3 className=''>Email: contact@example.com</h3>
        <div className='flex justify-evenly'>
        <a href="https://www.instagram.com/optimiserables/" target="_blank" rel="noreferrer" >
          <FontAwesomeIcon icon={faInstagram}  color='#ebbc52' className='m-0 border-2 py-4 px-2 h-6 w-6 rounded-tl-full rounded-tr-full hover:bg-white hover:text-black cursor-pointer'/>
        </a>
          <a href="https://x.com/Optimiserables" target="_blank" rel="noreferrer" >
          <FontAwesomeIcon icon={faFacebookSquare}  color='#ebbc52' className='m-0 border-2 py-4 px-2 h-6 w-6 rounded-tl-full rounded-tr-full hover:bg-white hover:text-black cursor-pointer'/>
          </a>
          <a href="https://www.tiktok.com/@theoptimiserables?lang=en" rel="noreferrer" target="_blank" >
          <FontAwesomeIcon icon={faTiktok}  color='#ebbc52' className='m-0 border-2 py-4 px-2 h-6 w-6 rounded-tl-full rounded-tr-full hover:bg-white hover:text-black cursor-pointer'/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61557637915188" rel="noreferrer" >
          <FontAwesomeIcon icon={faXTwitter}  color='#ebbc52'className='m-0 border-2 py-4 px-2 h-6 w-6 rounded-tl-full rounded-tr-full hover:bg-white hover:text-black cursor-pointer'/>
          </a>

          {/* <h3 className='border-2 p-4 rounded-tl-full rounded-tr-full hover:bg-white hover:text-black cursor-pointer'>F</h3>
          <h3 className='border-2 p-4 rounded-tl-full rounded-tr-full hover:bg-white hover:text-black cursor-pointer'>I</h3>
          <h3 className='border-2 p-4 rounded-tl-full rounded-tr-full hover:bg-white hover:text-black cursor-pointer'>G</h3> */}
        </div>
      </div>
    
        {/* Back to Top */}
        <div className="mt-4 md:mt-0 ">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-lg font-semibold underline hover:text-gray-200"
        >
          Back to top
        </button>
        
      </div>

      <div className="mt-4 md:mt-0 ">
        <h3>Created by Baldo bros</h3>
      </div>

      {/* Quick Links Section */}
      {/* <div className="quick-links mb-6 md:mb-0">
        <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
        <ul className="flex flex-col gap-2">
          <li>
            <a href="#about" className="hover:underline">About Us</a>
          </li>
          <li>
            <a href="#services" className="hover:underline">Services</a>
          </li>
          <li>
            <a href="#careers" className="hover:underline">Careers</a>
          </li>
          <li>
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
          </li>
        </ul>
      </div> */}

    

    
    </footer>
  );
}
