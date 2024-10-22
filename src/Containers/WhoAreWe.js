import React from 'react'

export default function WhoAreWe() {
  return (
    
      <div className='container flex flex-col items-center  w-3/4 page h-screen'>
      <h1 className='lg:text-8xl'>
        Who are we?
      </h1>
      <div className="flex w-full">
        {/* Add more for more divs for shows */}
      <div className="flex-1 bg-blue-500 p-4">
        Image 
      </div>
      <div className="flex-1 bg-green-500 p-4">
        Info 
      </div>
    </div>
      </div>
    
  )
}
