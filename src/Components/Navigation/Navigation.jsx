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
            <div className="navInner">
              <img src={Logo} alt="Optimiserables Logo" className='OpLogo'/>
                <ul className="navMenu">
                  

                </ul>
            </div>
        </div>
       
      <div className='logoContainer'>
        <img src={Logo} alt="Optimiserables Logo" className='OpLogo'/>
      </div>
      <div>
        <div className='socialContainer'>
          <FontAwesomeIcon icon={faInstagram} size="4x" color='#6A3276'/>
          <FontAwesomeIcon icon={faFacebookSquare} size="4x" color='#6A3276'/>
          <FontAwesomeIcon icon={faTiktok} size="4x" color='#6A3276'/>
          <FontAwesomeIcon icon={faXTwitter} size="4x" color='#6A3276'/>
        </div>
      </div>
    </nav>
  )
}
