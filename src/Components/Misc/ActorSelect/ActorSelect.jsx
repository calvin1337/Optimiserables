import React from "react";
import ActorSingle from "./ActorSingle";
import RandomButton from "./RandomButton";
import "./ActorStyles.css";

function ActorSelect({actors, handleClick, isActive, randomActor}) {
  
  console.log(actors)
  return (
    <div className="w-5/6 h-1/2">
    <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 h-full grid-rows-auto p-5">
        {actors.map((actor, index) => (
          <ActorSingle
            key={index}
            index={index}
            name={actor.name}
            src={actor.src}
            isActive={index === isActive}
            onClick={(e) => handleClick(e)}
          />
        ))}
        <RandomButton onClick={() => randomActor()} />
        </div>
    </div>
  );
}

export default ActorSelect;
