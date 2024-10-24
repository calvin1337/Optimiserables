import { useEffect, useState } from 'react';

const CustomScroll = (sectionsLength) => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = (event) => {
    const { deltaY } = event;

    if (deltaY > 0 && currentSection < sectionsLength - 1) {
      setCurrentSection((prev) => prev + 1);
    } else if (deltaY < 0 && currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentSection, sectionsLength]);

  useEffect(() => {
    document.getElementById(`section-${currentSection}`).scrollIntoView({ behavior: 'smooth' });
  }, [currentSection]);

  return currentSection; 
};

export default CustomScroll;
