import React, { useState } from "react";
import { useEffect } from "react";

function ActorDetails({ actor }) {
  const [currentImage, setCurrentImage] = useState(actor.src);

  useEffect(() => {
    setCurrentImage(actor.src);
  }, [actor]);

  const wardrobeClick = (src) => {
    setCurrentImage(src);
  };

  return (
    // flex flex-col md:flex-row items-start justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8
    <div className="flex flex-row justify-center  space-y-0 space-x-8">
      
      <div className="">
        <img
          className="w-64 h-64 object-cover"
          src={currentImage}
          alt={actor.name}
        />
        <p>Wardrobe</p>
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
        
        {/*wardrobe*/}
        {/* <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Wardrobe</h3>
          <div className="flex space-x-4">
            {actor.wardrobe.map((outfit, index) => (
              <img
                key={index}
                src={outfit.src}
                alt={`Wardrobe ${index + 1}`}
                className={`w-24 h-24 object-cover border-2 ${outfit.className} cursor-pointer`}
                onClick={() => wardrobeClick(outfit.src)}
              />
            ))}
          </div>
        </div> */}
      </div>

      </div>
  );
}

export default ActorDetails;
