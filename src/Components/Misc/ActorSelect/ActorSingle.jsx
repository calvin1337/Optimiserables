
function ActorSingle({ name, img, src, isActive, onClick }) {

  return (

    <div className={`character ${isActive ? 'active' : ''}`} onClick={onClick}>
      <img className="character__img" src={src} alt={name} />
      <p className="character__name">{name}</p>
    </div>

  );
}

export default ActorSingle