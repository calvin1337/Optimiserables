import React from 'react'
import ActorSingle from './ActorSingle'
import "./ActorStyles.css"
import { useState } from 'react';
import RandomButton from './RandomButton';

function ActorSelect() {

  const [activeActor, setActiveActor] = useState(0);
  const [selectionCount, setSelectionCount] = useState(0);


  const handleActorClick = (index) => {
    setActiveActor(index);
  };

  const randomSelect = () => {
    const delay = 100; // Delay in milliseconds
    const maxSelections = 10;

    const selectRandomActor = (count) => {
      if (count < maxSelections) {
        setTimeout(() => {
          const randomIndex = Math.floor(Math.random() * actors.length);
          setActiveActor(randomIndex);
          selectRandomActor(count + 1);
        }, delay);
      } else {
        setSelectionCount(0); // Reset the selection count after reaching the limit
      }
    };

    selectRandomActor(selectionCount);
  };
  

  // Mock data for just now
  const actors = [
    { name: 'Micheal', src: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg' },
    { name: 'Ryan', src: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg' },
    { name: 'Finlay', src: 'https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg' },
    { name: 'Davy', src: 'https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo=' },
    { name: 'Calvin', src: 'https://static.vecteezy.com/system/resources/thumbnails/007/234/162/small_2x/bengal-cat-resting-on-the-couch-funny-with-glasses-photo.jpg' },
    { name: 'Paing', src: 'https://catamazing.com/cdn/shop/files/catshark.jpg?v=1649869148' },
    { name: 'Brooke', src: 'https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=1200' },
  ];

  return (
    <div className='mx-auto my-4 mb-12 p-1.5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 '>
    
    {actors.map((actor, index) => (
        <ActorSingle
          key={index}
          index={index}
          name={actor.name}
          src={actor.src}
          isActive={index === activeActor}
          onClick={() => handleActorClick(index)}
        />
      ))}      
     <RandomButton onClick={() => randomSelect()} />
    </div>
  )
}

export default ActorSelect