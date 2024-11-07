function ActorSingle({ name, img, src, isActive, onClick, index }) {
  return (
    <div className="h-full flex p-2">
      <div
        className={`character bg-[#6A3276]/50 ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        <img className="character__img" src={src} alt={name} />
        <p className="character__name">{name}</p>
      </div>
      
    </div>
  );
}

export default ActorSingle;
