import React from "react";

function RandomButton({ onClick }) {
  return (
    <div
      className="bg-[#6A3276]/50 h-full pt-1 pr-1 pl-1"
      onClick={onClick}
    >
      <div className="character randomHover">
        <img
          className="character__img"
          src="https://www.models-resource.com/resources/big_icons/27/26859.png?updated=1533922249"
          alt="Random"
        />
        <p className="character__name">Random</p>
      </div>
    </div>
  );
}

export default RandomButton;
