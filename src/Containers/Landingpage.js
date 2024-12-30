import React from 'react'

export default function Home() {
  return (
    <div className='container flex flex-col items-center justify-center overflow-hidden h-dvh w-screen'>
        <div 
          className="bg-contain bg-no-repeat bg-center w-full h-full bg-[url('./Images/Portrait_Poster-Small.png')] sm:bg-[url('./Images/Portrait_Poster-Full.png')]"
        >
          <div className='arrow-container'>
            <div className="arrow"></div>
          </div>
        </div>
    </div>
  )
}
