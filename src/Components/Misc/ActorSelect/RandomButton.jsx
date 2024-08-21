function RandomButton({ isActive, onClick, index }) {

  return (
    <div className={`div8 bg-[#6A3276]/50 h-full pt-1 pr-1 pl-1`}>
    <div className="character randomHover" onClick={onClick}>
      <img className="character__img" src="https://www.models-resource.com/resources/big_icons/27/26859.png?updated=1533922249" alt="" />
      <p className="character__name">Random</p>
    </div>
    </div>
  );
}

export default RandomButton