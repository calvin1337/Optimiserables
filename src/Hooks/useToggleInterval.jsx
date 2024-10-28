import { useState, useEffect } from "react";

const useToggleInterval = (delay = 3000) => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowText((prev) => !prev);
    }, delay);

    return () => clearInterval(intervalId);
  }, [delay]);

  return showText;
};

export default useToggleInterval;
