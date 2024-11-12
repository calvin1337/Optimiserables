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
    <div className="flex w-full h-5/6 border-4 border-[#6A3277]/50 ">
      <img
        className={`w-full h-full object-cover`}
        src={`${currentImage}?t=${new Date().getTime()}`}
        alt="Actor"
      />
      <div
        className="absolute bottom-2 right-2 flex items-center justify-center"
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          backgroundColor: "white",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.1s, box-shadow 0.1s",
        }}
        onClick={toggleWardrobe}
      >
        <FontAwesomeIcon
          icon={faTshirt}
          className={`${isWardrobeOpen ? "text-black" : "text-blue-500"}`}
          style={{ fontSize: "14px", transition: "color 0.1s" }}
        />
      </div>

      {/* Speech Bubble */}
      {showBubble && (
        <div className="absolute bottom-2 right-8 bg-white border border-black rounded shadow-lg p-2">
          <p className="text-black text-xs">{bubbleMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ActorImage;
