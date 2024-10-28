import React from "react";

const Wardrobe = ({ wardrobe, wardrobeClick }) => (
  <div className="mt-4 flex space-x-2 overflow-x-auto">
    {wardrobe && wardrobe.length > 0 ? (
      wardrobe.map((outfit, index) => (
        <img
          key={index}
          src={outfit.src}
          alt={`Wardrobe ${index + 1}`}
          className={`object-contain border-2 ${outfit.className} cursor-pointer`}
          style={{ width: "120px", height: "120px" }}
          onClick={() => wardrobeClick(outfit.src, outfit.className)}
        />
      ))
    ) : (
      <p className="text-sm text-white">No wardrobe options available.</p>
    )}
  </div>
);

export default Wardrobe;
