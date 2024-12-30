import React from 'react';
import Logo from "../../Images/optimiserables_Logo.png";
import { useState } from "react"
import "./Navigation.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {faFacebookSquare, faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-scroll';

const imagePath = require(`../../Images/Members/optimiserablesframe1.png`);


export default function Navigation({ currentSection, setCurrentSection }) {
  const pages = [
    { name: 'Home', link: 'section-0' },
    { name: 'Who Are We?', link: 'section-1' },
    { name: 'Members', link: 'section-2' },
    { name: 'Upcoming', link: 'section-3' },
    { name: 'Newsletter', link: 'section-4' },
    { name: 'Contact', link: 'section-5' }
  ];

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
            <div className="navInner p-10 gap-5">
              <img src={Logo} alt="Optimiserables Logo Edinburgh Fringe 2025" className=' w-full'/>
              <img
                src={imagePath}
                alt="Op Cover"
                className="hover-image object-fill w-full h-full mx-auto"
              />
                <ul className="navMenuMobile text-2xl">
                    {pages.map((page, index) => (
                        <Link key={index} to={page.link} smooth={true} duration={500} spy={true} activeClass="active" onClick={() => setCurrentSection(index)}>
                            <li onClick={toggleNav} className={`navCircleMobile ${currentSection === index ? 'active' : ''}`}>{page.name}</li>
                        </Link>
                    ))}
                </ul>
                <div className='mt-auto justify-end align-bottom items-end'>
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
      <div className="verticalNav">
        <ul className="navMenu">
          {pages.map((page, index) => (
            <Link key={index} to={page.link} smooth={true} duration={500} spy={true} activeClass="active" onClick={() => setCurrentSection(index)}>
              <li className={`navCircle ${currentSection === index ? 'active' : ''}`}>
                <span className="navText">{page.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="w-full">
        <img src={Logo} alt="Optimiserables Logo" className="w-1/5 logoContainer md:left-20" />
      </div>
    </nav>
  );
}
