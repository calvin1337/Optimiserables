import React, { useState } from "react";
import ActorCard from "./ActorCard";
import ActorControls from "./ActorControls";

const actors = [
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

export default function CurrentMembers() {
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
    <div className="flex flex-col items-center w-screen h-screen"> 
      <div className="flex flex-col w-5/6 h-full">
        <div className='w-full flex justify-center items-center h-1/5'>
            <h1 className="text-2xl sm:text-4xl lg:text-8xl">Meet the actors!</h1>
        </div>
        <ActorCard actor={actors[currentActorIndex]} />
      </div>
    </div>
  );
}
