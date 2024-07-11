import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import Logo from "../../Images/optimiserables_Logo.png"
import "./Navigation.css"


export default function Navigation() {
  return (
    <nav>
      <div>
        <img src={Logo} alt="Optimiserables Logo" className='OpLogo'/>
      </div>
      <div>
        <div className='socialContainer'>
          <FontAwesomeIcon icon={faInstagram} size="4x" color='#000'/>
          <FontAwesomeIcon icon={faFacebookSquare} size="4x" color='#000'/>
          <FontAwesomeIcon icon={faTiktok} size="4x" color='#000'/>
          <FontAwesomeIcon icon={faXTwitter} size="4x" color='#000'/>
        </div>
      </div>
    </nav>
  )
}
