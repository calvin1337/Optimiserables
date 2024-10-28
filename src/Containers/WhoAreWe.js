import React, { useState } from "react";
import Backlight from "../Components/Misc/Effects/Backlight/Backlight";

const actors = [
  {
    name: "Who Are The Optimiserables?",
    image: "optimiserablesframe1.png",
    description:
      "We the Optimiserables agree that out there in the big wide world that it is indeed a bit naff. While we can't cure all known diseases or solve verbal disagreements in regards to pizza toppings, our goal is to take you on a trip and laugh about the simple things in life.",
  },
  {
    name: "Michael Garden",
    image: "PortraitMichael_Clean.png",
    description:
      "Michael is an upcoming actor and writer charging in to perform at the Fringe for the 1st time in 2025. He will also be our costume designer which means he'll be hunting through charity shops and hoping for the best.",
  },
  {
    name: "Brook Smith",
    image: "PortraitBrook_Clean.png",
    description:
      "Brook is an upcoming actor who is having his fist performance at the Fringe in 2025, he’s the groups budgeting manager and will be making sure not too much ‘££’ get’s spent. Come see him and the fantastic Optimiserables at the Fringe 2025!",
  },
  {
    name: "Finlay Donald",
    image: "PortraitFinlay_Clean.png",
    description:
      "Finlay is a actor who has a flair for shakespeare but also enjoy’s the simple things in life such as collaboration and creativity to bring amazing theater to the public. See him and The Optimiserables at Fringe 2025",
  },
  {
    name: "Fraser Henderson",
    image: "PortraitFraser_Clean.png",
    description: 
    "Let's meet contestant number one, he's a debonair actor who hails from the Highlands. He likes bubble baths and taking candy from babies. He's also the team's PR manager. "
  },
  {
    name: "Jamie McNeill",
    image: "PortraitJamie_Clean.png",
    description: 
    "Jamie is an upcoming actor, from of the slums of Glasgow he runs the Optimiserables social media. Jamie will be performing alongside the rest of the Optimiserables at the fringe 2025."
  },
  {
    name: "Lucas Viera McQueen",
    image: "PortraitLucas_Clean.png",
    description: 
    "I Like Trains"
  },
];

export default function WhoAreWe() {
  const [currentActorIndex, setCurrentActorIndex] = useState(0);

  const handleNext = () => {
    setCurrentActorIndex((prevIndex) => (prevIndex + 1) % actors.length);
  };

  const handlePrevious = () => {
    setCurrentActorIndex(
      (prevIndex) => (prevIndex - 1 + actors.length) % actors.length
    );
  };

  const imagePath = require(`../Images/Members/${actors[currentActorIndex].image}`);

  return (
    <div className="container flex flex-col items-center justify-center w-5/6 h-screen">
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-1/2 p-4 order-1 md:order-2 flex justify-center md:justify-start">
          <Backlight>
            <img
              src={imagePath}
              alt={actors[currentActorIndex].name}
              className="hover-image w-3/4 h-64 object-contain sm:w-full sm:h-80 md:h-96 lg:h-[500px] mx-auto"
            />
          </Backlight>
        </div>

        <div className="md:w-1/2 p-4 flex flex-col justify-between text-center md:text-left order-2 md:order-1">
          <h1 className="text-xl sm:text-4xl lg:text-6xl">
            {actors[currentActorIndex].name}
          </h1>
          <p className="text-xs sm:text-lg md:text-xl lg:text-2xl text-white w-full md:w-4/5">
            {actors[currentActorIndex].description}
          </p>
          <h2 className="text-lg sm:text-xl lg:text-2xl flex justify-center md:justify-between items-center mt-4 md:mt-0">
            <button
              onClick={handlePrevious}
              className="text-white p-2 rounded hover:opacity-80"
              style={{ backgroundColor: "#F1C570" }}
            >
              &#x1F878;
            </button>
            <span>
              {currentActorIndex + 1} / {actors.length}
            </span>
            <button
              onClick={handleNext}
              className="text-white p-2 rounded hover:opacity-80"
              style={{ backgroundColor: "#F1C570" }}
            >
              &#x1F87A;
            </button>
          </h2>
        </div>
      </div>
    </div>
  );
}
