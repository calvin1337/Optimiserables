import React, { useState } from "react";
import { useEffect } from "react";

function ActorDetails({ actor }) {
  const [currentImage, setCurrentImage] = useState(actor.src);
  const [currentStyle, setCurrentStyle] = useState("");
  const [isWardrobeOpen, setIsWardrobeOpen] = useState(false);

  useEffect(() => {
    setCurrentImage(actor.src);
    setCurrentStyle("");
  }, [actor]);

  const wardrobeClick = (src, style) => {
    console.log("Wardrobe clik", src, "style", style);
    setCurrentImage(src);
    setCurrentStyle(style || "");
  };

  const toggleWardrobe = () => {
    setIsWardrobeOpen(!isWardrobeOpen);
  };

  return (
    <div className="flex flex-row justify-center  space-y-0 space-x-8">
      <div className="">
        <img
          className={`w-64 h-64 object-cover ${currentStyle}`}
          src={currentImage}
          alt={actor.name}
        />
        <p className="cursor-pointer" onClick={toggleWardrobe}>
          Wardrobe{" "}
          <span className="text-blue-500">
            {isWardrobeOpen ? "close" : "open"}
          </span>
        </p>

        {/* Social Links */}
        {actor.socials && actor.socials.length > 0 && (
          <div className="bg-[#6A3276]/50">
            <ul className="flex space-x-4 justify-evenly">
              {actor.socials.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:border-2"
                  >
                    {social.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="w-2/5 text-left">
        <h2 className="text-3xl font-semibold mb-2">{actor.name}</h2>
        <p className="text-gray-600 mb-4">{actor.bio || "No bio available."}</p>

        {/*wardrobe
        Selecting an image in the wardrobe updates the main image
        However, When selecting another image that isnt the orginal image puts it at the top of the layer -
        so that it covers the logo.
        Currently cant figure out why - will try figure it out later
        - Davy
        */}
        
        {isWardrobeOpen && actor.wardrobe && actor.wardrobe.length > 0 ? (
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Wardrobe</h3>
            <div className="flex space-x-4">
              {actor.wardrobe.map((outfit, index) => (
                <img
                  key={index}
                  src={outfit.src}
                  alt={`Wardrobe ${index + 1}`}
                  className={`w-24 h-24 object-cover border-2 ${outfit.className} cursor-pointer`}
                  onClick={() => wardrobeClick(outfit.src, outfit.className)}
                />
              ))}
            </div>
          </div>
        ) : (
          isWardrobeOpen && <p>No wardrobe options available.</p>
        )}
      </div>
    </div>
  );
}

export default ActorDetails;
