import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './Components/Navigation/Footer';
import Navigation from './Components/Navigation/Navigation';
import Contact from './Containers/Contact';
import Home from "./Containers/Home";
import Team from "./Containers/Team";
import Upcoming from './Containers/Upcoming';
import WhoAreWe from './Containers/WhoAreWe';
import Landingpage from './Containers/Landingpage';
import CustomScroll from './Components/Navigation/CustomScroll';
import StarBackground from './Components/Misc/Background/StarBackground';
import CubeLoader from './Components/Misc/Background/Loader/CubeLoader';
import CloudBackground from './Components/Misc/Background/CloudBackground/CloudBackground';
import Test from './Containers/Test';
import UpcomingShows from './Containers/UpcomingShows';
import TestTeam from './Containers/TestTeam'
function App() {

  const sections = ['Landingpage', 'Home', 'WhoAreWe', 'Upcoming', 'Team', 'Contact'];
  CustomScroll(sections.length);
  const currentSection = CustomScroll(sections.length);

  
    return (
      
    <div className="App">
      <StarBackground />
      {/* <CloudBackground /> */}
      <Navigation currentSection={currentSection} />
      <div id="section-0" className="section">
        <Landingpage />
      </div>
      <div id="section-1" className="section">
        <Home />
      </div>
      <div id="section-2" className="section">
        <Test />
      </div>
      <div id="section-3" className="section">
        <UpcomingShows />
      </div>
      <div id="section-4" className="section">
        <Team />
      </div>
      <div id="section-5" className="section">
        {/* <CubeLoader /> */}
        <Contact />
        
      </div>
      
    </div>
  );
}

export default App;
