import React from 'react'
import cats from '../Images/Portrait_Poster.png';
import {faFacebookSquare, faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Home() {
  return (

    <div className='container flex flex-col items-center justify-center w-full overflow-hidden'>
        <div 
      className="bg-contain bg-no-repeat bg-center h-screen w-screen"
      style={{ backgroundImage: `url(${cats})` }}
      >
    </div>

      {/* <div className="fixed bottom-0 left-0 p-4 flex space-x-4 lg:hidden">
      <div className='sm: flex col gap-2'>
        <a href="https://www.instagram.com/optimiserables/" target="_blank" rel="noreferrer" className='socialLink'>
          <FontAwesomeIcon icon={faInstagram} size="2x" color='#ebbc52'/>
        </a>
          <a href="https://x.com/Optimiserables" target="_blank" rel="noreferrer" className='socialLink'>
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" color='#ebbc52'/>
          </a>
          <a href="https://www.tiktok.com/@theoptimiserables?lang=en" rel="noreferrer" target="_blank" className='socialLink'>
          <FontAwesomeIcon icon={faTiktok} size="2x" color='#ebbc52'/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61557637915188" rel="noreferrer" className='socialLink'>
          <FontAwesomeIcon icon={faXTwitter} size="2x" color='#ebbc52'/>
          </a>
      </div>
      </div> */}
    
    </div>
  )
}
