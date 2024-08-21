
function ActorSingle({ name, img, src, isActive, onClick, index}) {

  return (
    <div className={`div${index + 1} bg-[#6A3276]/50 h-full pt-1 pr-1 pl-1`}> 
    <div className={`character div${index + 1} ${isActive ? 'active' : ''}`} onClick={onClick}>
      <img className="character__img" src={src} alt={name} />
      <p className="character__name">{name}</p>
    </div>
    </div>
  );
}

export default ActorSingle