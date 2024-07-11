import React from 'react'

export default function Home() {
  return (
    <div>
      <h1>
        Exciting things are on the horizon...
      </h1>
      <div>
        <div>
          <h2>Subscribe to be the first to know about all our upcoming events!</h2>
        </div>
        {/* Input container */}
        <div className='inputContainer'>
        <div className='half'>
          <h3>Input</h3>
        </div>
        <div className='half'>
          <h3>Button</h3>
        </div>
        </div>
      </div>
    </div>
  )
}
