import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Contact from './Containers/Contact';
import Home from "./Containers/Home";
import Landingpage from './Containers/Landingpage';
import StarBackground from './Components/Misc/Background/StarBackground';
import Test from './Containers/Test';
import UpcomingShows from './Containers/UpcomingShows';
import Members from './Containers/Members';
import { Element, scroller } from 'react-scroll';
import { useSwipeable } from 'react-swipeable';

function App() {
  const sections = ['Landingpage', 'WhoAreWe', 'Members', 'Upcoming', 'Home', 'Contact'];
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    scroller.scrollTo(`section-${currentSection}`, {
      duration: 500,
      smooth: true,
    });
  }, [currentSection]);

  const handlers = useSwipeable({
    onSwipedUp: () => {
      setCurrentSection((prev) => {
        const newSection = Math.min(prev + 1, sections.length - 1);
        scroller.scrollTo(`section-${newSection}`, {
          duration: 500,
          smooth: true,
        });
        return newSection;
      });
    },
    onSwipedDown: () => {
      setCurrentSection((prev) => {
        const newSection = Math.max(prev - 1, 0);
        scroller.scrollTo(`section-${newSection}`, {
          duration: 500,
          smooth: true,
        });
        return newSection;
      });
    },
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
  });

  return (
    <div className="App" {...handlers}>
      <StarBackground />
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <Element name="section-0" id="section-0" className="section">
        <Landingpage />
      </Element>
      <Element name="section-1" id="section-1" className="section">
        <Test />
      </Element>
      <Element name="section-2" id="section-2" className="section">
        <Members />
      </Element>
      <Element name="section-3" id="section-3" className="section">
        <UpcomingShows />
      </Element>
      <Element name="section-4" id="section-4" className="section">
        <Home />
      </Element>
      <Element name="section-5" id="section-5" className="section">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
