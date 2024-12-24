import React from 'react';
import Logo from "../../Images/optimiserables_Logo.png";
import './Navigation.css';
import { Link } from 'react-scroll';

export default function Navigation({ currentSection }) {
  const pages = [
    { name: 'Home', link: 'section-0' },
    { name: 'Who Are We?', link: 'section-1' },
    { name: 'Members', link: 'section-2' },
    { name: 'Upcoming', link: 'section-3' },
    { name: 'Newsletter', link: 'section-4' },
    { name: 'Contact', link: 'section-5' }
  ];

  return (
    <nav>
      <div className="verticalNav">
        <ul className="navMenu">
          {pages.map((page, index) => (
            <Link key={index} to={page.link} smooth={true} duration={500} spy={true} activeClass="active">
              <li className={`navCircle ${currentSection === index ? 'active' : ''}`}>
                <span className="navText">{page.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="w-full">
        <img src={Logo} alt="Optimiserables Logo" className="w-1/5 logoContainer" />
      </div>
    </nav>
  );
}
