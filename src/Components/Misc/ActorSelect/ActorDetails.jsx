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
    <div
      ref={ref}
      className="flex flex-col sm:flex-row justify-start w-full max-w-4xl mx-auto border-2 border-white relative"
    >
      <div className="flex flex-col justify-start items-center sm:mr-8 mb-4 sm:mb-0">
        <ActorImage
          currentImage={currentImage}
          toggleWardrobe={toggleWardrobe}
          isWardrobeOpen={isWardrobeOpen}
          showBubble={showBubble}
          bubbleMessage={bubbleMessage}
        />
        <SocialLinks socials={actor.socials} />
      </div>
      <div className="flex flex-col border-2 border-yellow-400 relative">
        <ActorInfo name={actor.name} bio={actor.bio} />
        {isWardrobeOpen && (
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
            <Wardrobe wardrobe={actor.wardrobe} wardrobeClick={wardrobeClick} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ActorDetails;
