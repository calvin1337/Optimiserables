import React from 'react';
import Logo from "../../Images/optimiserables_Logo.png";
import './Navigation.css';

export default function Navigation({ currentSection }) {
  const pages = [
    { name: 'Home', link: 'section-0' },
    { name: 'Events', link: 'section-1' },
    { name: 'Who Are We?', link: 'section-2' },
    { name: 'Upcoming', link: 'section-3' },
    { name: 'The Team', link: 'section-4' },
    { name: 'Contact', link: 'section-5' } 
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <div className="verticalNav">
        <ul className="navMenu">
          {pages.map((page, index) => (
            <li
              key={index}
              className={`navCircle ${currentSection === index ? 'active' : ''}`}
              onClick={() => scrollToSection(page.link)} 
            >
              <span className="navText">{page.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="logoContainer">
        <img src={Logo} alt="Optimiserables Logo" className="w-1/5" />
      </div>
    </nav>
  );
}
