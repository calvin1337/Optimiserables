import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'
import "./Navigation.css"


export default function Navigation() {
  return (
    <nav>
      <div>
        <h1>
          LOGO
        </h1>
      </div>
      <div>
        <div className='socialContainer'>
          <FontAwesomeIcon icon={faInstagram} size="3x"/>
          <FontAwesomeIcon icon={faFacebook} size="3x"/>
          <FontAwesomeIcon icon={faTiktok} size="3x"/>
          <FontAwesomeIcon icon={faTwitter} size="3x" />
        </div>
      </div>
    </nav>
  )
}
