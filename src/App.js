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

function App() {

  const sections = ['Landingpage', 'Home', 'WhoAreWe', 'Upcoming', 'Team'];
  CustomScroll(sections.length);
  const currentSection = CustomScroll(sections.length);

  
    return (
    <div className="App">
      <Navigation currentSection={currentSection} />
      <div id="section-0" className="section">
        <Landingpage />
      </div>
      <div id="section-1" className="section">
        <Home />
      </div>
      <div id="section-2" className="section">
        <WhoAreWe />
      </div>
      <div id="section-3" className="section">
        <Upcoming />
      </div>
      <div id="section-4" className="section">
        <Team />
       
      </div>
      <Footer />
    </div>
  );
}

export default App;
