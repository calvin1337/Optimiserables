import React from 'react'
import Button from '../Components/Misc/Button'
import enuLogo from "../Images/enu.svg"
import fringeLogo from "../Images/fringe.jpg"

export default function Home() {
  return (
    <div className='container flex flex-col items-center justify-center w-3/4'>
      <h1 className='lg:text-8xl'>
        Exciting things are on the horizon...
      </h1>
      <h2 className='lg:text-3xl'>Subscribe to our newsletter or follow us on social media to be the first to know about all our upcoming events!</h2>
      <div className='mt-5 w-full flex justify-center'>
        {/* Input container */}
        <form className='flex flex-col w-full sm:w-11/12 lg:flex-row gap-5 h-full'>
          <div className='flex-1'>
            <div className='formField'>
              <input 
                className="w-full p-3 text-lg leading-7 border-2 border-[#6A3276] rounded-md"
                placeholder='Enter your email'
              />
            </div>
          </div>
          <div className='flex-2'>
            <div className='formField'>
              <Button />
            </div>
          </div>
        </form>
      </div>
      <div className="fixed bottom-0 right-0 p-4 flex space-x-4">
        {/* https://www.edfringe.com/take-part/putting-on-a-show/marketing-and-promotion#fringe-logos  */}
        <div className="w-40 h-20">
          <img src={enuLogo} alt="Edinburgh Napier Logo" className="w-full h-full object-contain"/>
        </div>
        <div className="w-40 h-20">
          <img src={fringeLogo} alt="Edinburgh Fringe Logo" className="w-full h-full object-contain bg-transparent"/>
        </div>
      </div>
    </div>
  )
}
