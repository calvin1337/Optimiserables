import React, { useState } from "react";
import ActorCard from "./ActorCard";
import ActorControls from "./ActorControls";

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

  return (
    <div className="relative container flex flex-col items-center w-full h-full"> 
      <div className="flex flex-col md:flex-row w-full">
        <ActorCard actor={actors[currentActorIndex]} />
      </div>
      <div className=" w-full flex justify-center"> 
        <ActorControls
          currentIndex={currentActorIndex}
          totalActors={actors.length}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </div>
    </div>
  );
}

// I forgot what this is for

// <div className="absolute bottom-2 w-full flex justify-center"> 
//         <ActorControls
//           currentIndex={currentActorIndex}
//           totalActors={actors.length}
//           onNext={handleNext}
//           onPrevious={handlePrevious}
//         />
//       </div>