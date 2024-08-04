import React from 'react'
import Button from '../Components/Misc/Button'

export default function Home() {
  return (
    <div>
      <h1>
        Exciting things are on the horizon...
      </h1>
      <h1>Follow us on social media for all the latest news</h1>
      <div>
        <div>
          <h2>Subscribe to be the first to know about all our upcoming events!</h2>
        </div>
        {/* Input container */}
        <form className='inputContainer'>
        <div className='flex1'>
            <div className='formField '>
            <input placeholder='Enter your email'></input>
            </div>
            
         
        </div>
        <div className='flex2'>
        <div className='formField'>
            <Button />
            </div>
        </div>
        </form>
      </div>
    </div>
  )
}
