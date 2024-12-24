import React from 'react';
import Logo from "../../Images/optimiserables_Logo.png";
import './Navigation.css';

export default function Navigation({ currentSection, setCurrentSection }) {
  const pages = [
    { name: 'Home', link: 'section-0' },
    { name: 'Who Are We?', link: 'section-1' },
    { name: 'Members', link: 'section-2' },
    { name: 'Upcoming', link: 'section-3' },
    { name: 'Newsletter', link: 'section-4' },
    { name: 'Contact', link: 'section-5' } 
  ];

  const scrollToSection = (sectionId, index) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setCurrentSection(index);
  };

  return (
    <nav>
      <div className="verticalNav">
        <ul className="navMenu">
          {pages.map((page, index) => (
            <li
              key={index}
              className={`navCircle ${currentSection === index ? 'active' : ''}`}
              onClick={() => scrollToSection(page.link, index)} 
            >
              <span className="navText">{page.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full">
        <img src={Logo} alt="Optimiserables Logo" className="w-1/5 logoContainer" />
      </div>
    </nav>
  );
}
