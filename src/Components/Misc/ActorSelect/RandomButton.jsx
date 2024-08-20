function RandomButton({ isActive, onClick }) {

  return (

    <div className="character randomHover" onClick={onClick}>
      <img className="character__img" src="https://www.models-resource.com/resources/big_icons/27/26859.png?updated=1533922249" alt="" />
      <p className="character__name">Random</p>
    </div>

  );
}

export default RandomButton