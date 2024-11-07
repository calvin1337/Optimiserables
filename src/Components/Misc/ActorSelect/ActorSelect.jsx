import React from "react";
import ActorSingle from "./ActorSingle";
import RandomButton from "./RandomButton";
import ActorDetails from "./ActorDetails";
import "./ActorStyles.css";

function ActorSelect({actors}) {
  
  console.log(actors)
  return (
    <div className="w-5/6 h-1/2 border-4 border-red-500">
    <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 h-full grid-rows-auto">
        {actors.map((actor, index) => (
          <ActorSingle
            key={index}
            index={index}
            name={actor.name}
            src={actor.src}
            isActive={index === "test"}
          />
        ))}
        
        </div>
    </div>
  );
}

export default ActorSelect;
