import React from 'react';

const ActorControls = ({ currentIndex, totalActors, onNext, onPrevious }) => {
  return (
    <h2 className="text-lg sm:text-xl lg:text-2xl w-full flex justify-evenly md:justify-evenly items-center mt-4 md:mt-0">
      <button
        onClick={onPrevious}
        className="text-white p-2 rounded hover:opacity-80"
        style={{ backgroundColor: "#F1C570" }}
      >
        &#x1F878;
      </button>
      <span>
        {currentIndex + 1} / {totalActors}
      </span>
      <button
        onClick={onNext}
        className="text-white p-2 rounded hover:opacity-80"
        style={{ backgroundColor: "#F1C570" }}
      >
        &#x1F87A;
      </button>
    </h2>
  );
};

export default ActorControls;
