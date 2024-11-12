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
      className="flex flex-col sm:flex-row justify-start w-5/6 mx-auto h-1/2 gap-5"
    >
      <div className="flex flex-col align-middle sm:justify-start sm:items-center sm:mr-8 mb-4 sm:mb-0 h-2/3 sm:h-full sm:w-2/3 md:1/3 p-5">
        <ActorImage
          currentImage={currentImage}
          toggleWardrobe={toggleWardrobe}
          isWardrobeOpen={isWardrobeOpen}
          showBubble={showBubble}
          bubbleMessage={bubbleMessage}
        />
        <SocialLinks socials={actor.socials} />
      </div>
      <div className="flex flex-col sm:w-2/3 w-full">
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