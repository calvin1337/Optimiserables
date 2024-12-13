import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTshirt } from "@fortawesome/free-solid-svg-icons";

const ActorImage = ({
  currentImage,
  toggleWardrobe,
  isWardrobeOpen,
  showBubble,
  bubbleMessage,
}) => {
  console.log("Rendering ActorImage with src:", currentImage);
  return (
    <div className="flex w-full h-full border-4 border-[#6A3277]/50 ">
      <img
        className={`w-full h-full object-contain md:object-cover`}
        src={`${currentImage}?t=${new Date().getTime()}`}
        alt="Actor"
      />
      
    </div>
  );
};

export default ActorImage;
