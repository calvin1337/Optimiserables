import React from 'react'
import Button from '../Components/Misc/Button'
import enuLogo from "../Images/enu.svg"
import fringeLogo from "../Images/fringe.jpg"
import {faFacebookSquare, faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import marley from "../Images/Marley_Meow.jpg"


export default function Team() {
  return (
    <div className="flex h-screen">
    {/* Headshot */}
    <div className="container flex w-1/2 m-10 border-2">
    <img src={marley} alt='Marley' className='w-full h-auto' />

    </div>
  
    <div className="w-1/2 flex flex-col justify-center p-10 border-2">
      <div className='border-2'>
        <h1 className="text-4xl font-bold mb-4">Michael Garden</h1>
        <p className="text-lg mb-6">Michael is an upcoming actor and writer charging in to perform at the Fringe for the 1st time in 2025. He will also be our costume designer which means he'll be hunting through charity shops and hoping for the best.</p>
      </div>
      
      {/* Team Photos */}
      <div className="flex items-end gap-5 overflow-hidden border-2 border-red-950">
        <img src={marley} alt="Meow 1" className="w-3/4 h-auto" />
        <img src={marley} alt="Meow 2" className="w-3/4 h-auto" />
        <img src={marley} alt="Meow 3" className="w-3/4 h-auto" />
      </div>
    </div>
  </div>
  
  )
}
