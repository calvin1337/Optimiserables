import React from 'react'
import {faFacebookSquare, faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import Logo from "../../Images/optimiserables_Logo.png"
import { useState } from "react"
import "./Navigation.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {

  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    setToggle(!toggle);
}



  return (
    <nav>
      <div id="navbar" onClick={toggleNav} className={`navSidebar ${toggle ? "showNav" : ""}`}>
      <button onClick={toggleNav} className="navbarToggler">
                <FontAwesomeIcon icon={toggle ? faTimes : faBars} />
        </button>
            <div className="navInner p-10">
              <img src={Logo} alt="Optimiserables Logo Edinburgh Fringe 2025" className=' w-full'/>
                <ul className="navMenu text-2xl">
                <li>Home</li>
                <li>Events</li>
                <li>Meet the team</li>
                <li>Contact</li>
                </ul>
                <div className='mt-auto'>
                <h3 className='mb-4'>Follow us!</h3>
                <div className='sm: flex col gap-2 mb-4'>
                    <FontAwesomeIcon icon={faInstagram} size="3x" color='#ebbc52'/>
                    <FontAwesomeIcon icon={faFacebookSquare} size="3x" color='#ebbc52'/>
                    <FontAwesomeIcon icon={faTiktok} size="3x" color='#ebbc52'/>
                    <FontAwesomeIcon icon={faXTwitter} size="3x" color='#ebbc52'/>
                </div>
                <p className="navCopyright">Created by <b><a target="_blank" href="/">Davy & Calvin</a></b></p>
            </div>
            </div>
        </div>
       <div className='navbar flex justify-center lg:justify-between'>
        
      
      <div className='hidden lg:block'>
        <div className='linkContainer'>
          <ul className='justify-center flex flex-row gap-3 text-3xl'>
            <li className='active'>
              <a href="/">
              Home
              </a>
            </li>
            <li>
              <a href="/">
              Events
              </a>
            </li>
            <li>
              <a href="/">
              The Team
              </a>
            </li>
            <li>
              <a href="/">
              Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='logoContainer '>
        <img src={Logo} alt="Optimiserables Logo" className='OpLogo'/>
      </div>
      </div>
    </nav>
  )
}
