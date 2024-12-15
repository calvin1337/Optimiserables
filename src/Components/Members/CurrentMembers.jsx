import React, { useState } from "react";
import ActorCard from "./ActorCard";
import ActorControls from "./ActorControls";

const actors = [
  {
    name: "Michael Garden",
    image: "PortraitMichael_Clean.png",
    description:
    "Michael James Garden is an actor and writer from Aberdeenshire. He has continually taken on acting examinations in 2012 and pursued further acting training from 2016 onwards. He has attained a HND in Acting & Performance  from NESCOL and a PCertLAM: Certificate in Speech & Drama from LAMDA. He is currently studying for the BA (Hons) Stage & Screen performance degree at Edinburgh Napier University.",
    credits: ["The Pillowman - Aberdeen Repertory Theatre", "A Clockwork Orange - Taylormade Productions", "An Aberdeen Christmas Carol - Ten Feet Tall Theatre"]
  },
{
    name: "Brook Smith",
    image: "PortraitBrook_Clean.png",
    description:
      "Brook is an upcoming actor who is having his fist performance at the Fringe in 2025, he’s the groups budgeting manager and will be making sure not too much ‘££’ get’s spent. Come see him and the fantastic Optimiserables at the Fringe 2025!",
    credits: [""]
    },
  {
    name: "Finlay Donald",
    image: "PortraitFinlay_Clean.png",
    description:
      "Finlay is a actor who has a flair for shakespeare but also enjoy’s the simple things in life such as collaboration and creativity to bring amazing theater to the public. See him and The Optimiserables at Fringe 2025",
    credits: [""]
    },
  {
    name: "Fraser Henderson",
    image: "PortraitFraser_Clean.png",
    description: 
    "Let's meet contestant number one, he's a debonair actor who hails from the Highlands. He likes bubble baths and taking candy from babies. He's also the team's PR manager. ",
    credits: [""]
  },
  {
    name: "Jamie McNeill",
    image: "PortraitJamie_Clean.png",
    description: 
    "Jamie is an upcoming actor, from of the slums of Glasgow he runs the Optimiserables social media. Jamie will be performing alongside the rest of the Optimiserables at the fringe 2025.",
    credits: [""]
  },
  {
    name: "Lucas Viera McQueen",
    image: "PortraitLucas_Clean.png",
    description: 
    "Lucas McQueen is an actor and writer hailing from (sunny) Dumfries and Galloway. He is excited to perform in his second Fringe production after first appearing at the festival in 2023. He is currently working towards a BA (Hons) Acting and English degree at Edinburgh Napier University. ",
    credits: [""]
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
    <div className="flex flex-col items-center w-screen h-screen "> 
      <div className="flex flex-col w-full md:w-5/6 h-full pt-5 pb-5">
        <div className='w-full flex justify-center items-center' style={{ height: "10%" }}>
            <h1 className="text-2xl sm:text-3xl xl:text-5xl">Meet the actors!</h1>
        </div>
        <ActorCard actor={actors[currentActorIndex]} />
        <div className="w-full flex justify-center items-center" style={{ height: "10%" }}> 
        <ActorControls
          currentIndex={currentActorIndex}
          totalActors={actors.length}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
        </div>
      </div>
    </div>
  );
}
