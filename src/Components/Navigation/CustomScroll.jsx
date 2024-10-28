import { useEffect, useState } from 'react';

const CustomScroll = (sectionsLength) => {
  const [currentSection, setCurrentSection] = useState(0);
  let touchStartY = 0;

  const handleScroll = (event) => {
    const { deltaY } = event;

    if (deltaY > 0 && currentSection < sectionsLength - 1) {
      setCurrentSection((prev) => prev + 1);
    } else if (deltaY < 0 && currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
    }
  };

  const handleTouchStart = (event) => {
    touchStartY = event.touches[0].clientY;
  };

  const handleTouchEnd = (event) => {
    const touchEndY = event.changedTouches[0].clientY;
    const swipeDistance = touchEndY - touchStartY;

    if (swipeDistance < -50 && currentSection < sectionsLength - 1) {
    
      setCurrentSection((prev) => prev + 1);
    } else if (swipeDistance > 50 && currentSection > 0) {
      
      setCurrentSection((prev) => prev - 1);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, sectionsLength]);

  useEffect(() => {
    document.getElementById(`section-${currentSection}`).scrollIntoView({ behavior: 'smooth' });
  }, [currentSection]);

  return currentSection;
};

export default CustomScroll;
