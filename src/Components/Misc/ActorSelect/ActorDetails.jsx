import React, { useEffect, useState, useRef } from "react";
import ActorImage from "./ActorImage";
import Wardrobe from "./Wardrobe";
import SocialLinks from "./SocialLinks";
import ActorInfo from "./ActorInfo";
import useChatBubble from "../../../Hooks/useChatBubble";
import "./ActorStyles.css";

function ActorDetails({ actor }) {
  const [currentImage, setCurrentImage] = useState(actor.src);
  const [currentStyle, setCurrentStyle] = useState("");
  const [isWardrobeOpen, setIsWardrobeOpen] = useState(false);

  const ref = useRef(null);

  const messages = [
    "You here for the Panty Raid? Click here",
    "Strip-tease!",
    "This Is Where I Keep My Junk",
    "Come See My Man Cave",
    "Man-hole Cover",
  ];

  const { showBubble, bubbleMessage } = useChatBubble(ref, messages);

  useEffect(() => {
    setCurrentImage(actor.src);
    setCurrentStyle("");
    setIsWardrobeOpen(false);
  }, [actor]);

  const wardrobeClick = (src, style) => {
    setCurrentImage(src);
    setCurrentStyle(style || "");
    console.log("Wardrobe item clicked:", src, style);
    console.log("Current Image set to:", src);
  };

  const toggleWardrobe = () => {
    setIsWardrobeOpen(!isWardrobeOpen);
  };

  return (
    <div className="w-5/6 mx-auto h-1/2 sm:h-1/2 border-red-800 border flex flex-col p-4 box-border overflow-hidden">
    <h1 className="font-bold mb-4 text-center text-3xl md:text-6xl lg:text-8xl">
      Meet the Crew
    </h1>
    <div className="flex flex-col md:flex-row gap-5 h-full">
      {/* Top Child (left) */}
      <div className="p-4 text-white flex-1 md:w-1/2 h-full overflow-hidden">
        <div className="h-full overflow-y-auto">
        <ActorImage
          currentImage={currentImage}
          toggleWardrobe={toggleWardrobe}
          isWardrobeOpen={isWardrobeOpen}
          showBubble={showBubble}
          bubbleMessage={bubbleMessage}
        />
        </div>
      </div>

      {/* Bottom Child (right) */}
      <div className="p-4 text-white flex-1 md:w-1/2 h-full overflow-hidden">
        <div className="h-full overflow-y-auto">
          <ActorInfo name={actor.name} bio={actor.bio} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ActorDetails;