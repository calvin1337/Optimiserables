import React from "react";
import ActorSingle from "./ActorSingle";
import RandomButton from "./RandomButton";
import "./ActorStyles.css";

function ActorSelect({actors, handleClick, isActive, randomActor}) {
  
  console.log(actors)
  return (
    <div className="w-5/6 h-1/2 sm:h-1/2 border-red-800 border">
    <div className="mx-auto grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] min-[200px]:grid-cols-3 md:grid-cols-4 h-full p-5">
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
