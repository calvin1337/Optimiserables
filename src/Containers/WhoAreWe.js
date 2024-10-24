import React from 'react'
import image from '../Images/optimiserablesframe1.png'
export default function WhoAreWe() {
  return (
    
      <div className='container flex flex-col items-center justify-center  w-5/6 page h-screen'>
      
      <div className="flex w-full">
        {/* Add more for more divs for shows */}
      <div className="flex-1 p-4 flex flex-col justify-between text-left">
      <h1 className='lg:text-6xl text-left '>
        Who Are The Optimiserables?
      </h1>
       <p className='text-2xl text-white w-4/5'>
       We the Optimiserables agree that out there in the big wide world that it is indeed a bit naff. While we can't cure all known diseases or solve verbal disagreements in regards to pizza toppings, our goal is to take you on a trip and laugh about the simple things in life.
       </p>
       <h2 className='lg:text-4xl'>
        Come Meet The Team!
       </h2>
      </div>

      <div className="flex-1 p-4">
        <img src={image} 
        alt='the gang'
        className="w-full h-90 object-contain"
        >

        </img>
      </div>
    </div>
      </div>
    
  )
}
