import React, { useState } from "react";
import ActorCard from "./ActorCard";

const actors = [
  {
    name: "Michael Garden",
    image: "PortraitMichael_Clean.png",
    description:
      "Michael James Garden is an actor and writer from Aberdeenshire. He has continually taken on acting examinations in 2012 and pursued further acting training from 2016 onwards. He has attained a HND in Acting & Performance  from NESCOL and a PCertLAM: Certificate in Speech & Drama from LAMDA. He is currently studying for the BA (Hons) Stage & Screen performance degree at Edinburgh Napier University.",
    credits: [
      "The Pillowman - Aberdeen Repertory Theatre",
      "A Clockwork Orange - Taylormade Productions",
      "An Aberdeen Christmas Carol - Ten Feet Tall Theatre",
    ],
    voCredits: ["An Aberdeen Christmas Carol - Ten Feet Tall Theatre"],
  },
  {
    name: "Brook Smith",
    image: "PortraitBrook_Clean.png",
    description:
      "Brook is born and bred in Aberdeenshire has been in training since 2017. He achieved his HND in Acting and Performance at NESCol in Aberdeen along side Finlay Donald. Brook is currently in the works of obtaining his BA (Hons) degree at Edinburgh Napier University and graduate by 2025.",
    credits: [
      "A Midsummer Night”s Dream - Bottom",
      "The Polar Express Live Event - Head chef and Steward",
      "Uncle Vanya - Astrov",
    ],
    voCredits: [],
  },
  {
    name: "Finlay Donald",
    image: "PortraitFinlay_Clean.png",
    description:
      "Finlay, who hails from the quaint wee town of Brechin began his acting training in 2019, achieving his HND in Acting and Performance from NESCOL in Aberdeen. He has since gained a BA (Hons) in Professional Theatre Practice from Dundee and Angus College in 2023 and is currently completing his BA (Hons) in Stage and Screen Acting at Napier University where he hopes to qualify next year (2025).",
    credits: [
      "A Midsummer Night’s Dream - Lysander",
      "Market Boy - The Boy",
      "The Polar Express Live Event - Santa & Hobo",
      "Uncle Vanya - Serebryakov",
    ],
    voCredits: [],
  },
  {
    name: "Fraser Henderson",
    image: "PortraitFraser_Clean.png",
    description:
      "Fraser hails from Drumnadrochit, along the western banks of Loch Ness. He has been acting since 2016, and has in that time achieved and HND in Acting and Performance at Inverness UHI, Aberdeen Nescol and is currently undertaking a BA (Hons) degree at Napier University. Fraser has also trained abroad in the USA under a merit-based scholarship at the American Academy of Dramatic Arts Los Angeles. ",
    credits: [
      "The Crucible - Proctor",
      "Rumours - Leonard",
      "When You Coming Back Red Ryder? - Red/Stephen",
      "Biloxi Blues - Eugene",
      "Leading Ladies - Jack",
      "Magic Time - David",
    ],
    voCredits: [
      "Eye for Eye (PC) - Gerald",
      "Hugo's Mind Palace (Animation) - Daryl",
      "Path to Nowhere (Android, IOS) - Julien",
      "Unusual Findings (PC, Nintendo Switch) - Adm. Rembrandt, Old Joe, Gang Member",
    ],
  },
  {
    name: "Jamie McNeill",
    image: "PortraitJamie_Clean.png",
    description:
      "Jamie McNeill is an actor based in Glasgow. He started studying theatre and performance in 2019 at Glasgow Kelvin College. After achieving his HND he has continued his studies at Edinburgh Napier University, where he is currently studying BA(Hons) Stage and Screen acting. ",
    credits: [
      "Feed the Beast - Dennis",
      "Stags and Hens - Peter",
      "Cornwall/Albany - King Lear",
    ],
    voCredits: [],
  },
  {
    name: "Lucas Viera McQueen",
    image: "PortraitLucas_Clean.png",
    description:
      "Lucas McQueen is an actor and writer hailing from (sunny) Dumfries and Galloway. He is excited to perform in his second Fringe production after first appearing at the festival in 2023. He is currently working towards a BA (Hons) Acting and English degree at Edinburgh Napier University. ",
    credits: [
      "Two Tigers - English Cabaret",
      "Dark Matter - Misdirected Productions",
      "Europe - Edinburgh Napier University",
    ],
    voCredits: [],
  },
].sort(() => Math.random() - 0.5);

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
    <div className="flex flex-col items-center w-screen h-dvh relative">
      <div className="flex flex-col w-full md:w-5/6 h-full pt-5 pb-5 md:justify-center">
        <div
          className="w-full flex justify-center items-center"
          style={{ height: "10%" }}
        >
          <h1 className="text-2xl sm:text-3xl xl:text-5xl mb-5">Meet the actors!</h1>
        </div>
        <ActorCard actor={actors[currentActorIndex]} />
        <div
          className="w-full flex justify-center items-center"
          style={{ height: "10%" }}
        >
          <h2 className="bottom-6 absolute text-lg sm:text-xl lg:text-2xl w-full flex justify-center gap-2 items-center mt-4 md:mt-0">
            <span className="font-extrabold text-[#F1C570]">
            {currentActorIndex + 1}
            </span>
            <span>
               / 
            </span>
            <span className="font-extrabold">
            {actors.length}
            </span>
          </h2>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrevious}
        className="absolute left-12 bottom-4 md:bottom-auto md:top-1/2 transform md:-translate-y-1/2 text-white p-2 lg:p-5 lg:text-2xl rounded-full hover:opacity-8 z-10 font-extrabold"
        style={{ backgroundColor: "#F1C570" }}
      >
        &#x1F878;
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-10 bottom-4 md:bottom-auto md:top-1/2 transform md:-translate-y-1/2 text-white p-2 lg:p-5 lg:text-2xl rounded-full hover:opacity-8 z-10 font-extrabold"
        style={{ backgroundColor: "#F1C570" }}
      >
        &#x1F87A;
      </button>
    </div>
  );
}
