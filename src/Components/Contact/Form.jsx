import React from 'react'
import Button from '../Misc/Button'

export default function Form() {
  return (
    <form className='flex gap-2 flex-col w-2/5'>
      <div className='flex gap-2'>
        <div className='flex flex-col w-full'>
          <label className="text-left" htmlFor="fname">First Name</label>
          <input 
            className="w-full p-3 text-lg border-3 border-[#6A3276] rounded-md box-border" 
            type="text" 
            name="fname" 
            id="contact-form-fname" 
          />
        </div>
        <div className='flex flex-col w-full'>
          <label className="text-left" htmlFor="sname">Second Name</label>
          <input 
            className="w-full p-3 text-lg border-3 border-[#6A3276] rounded-md box-border" 
            type="text" 
            name="sname" 
            id="contact-form-sname" 
          />
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <label className="text-left" htmlFor="email">Enter Your Email</label>
        <input className="w-full p-3 text-lg border-3 border-[#6A3276] rounded-md" type="text" name="email" id="contact-form-email" />
      </div>
      <div className='flex flex-col gap-2'>
        <label className="text-left" htmlFor="subject">Enter Your Subject</label>
        <input className="w-full p-3 text-lg border-3 border-[#6A3276] rounded-md" type="text" name="subject" id="contact-form-subject" />
      </div>
      <div className='flex flex-col gap-2'>
        <label className="text-left" htmlFor="message">Enter Your Message</label>
        <textarea
          name="message"
          id="contact-form-message"
          cols="20"
          rows="4"
          className="w-full p-3 text-lg border-3 border-[#6A3276] rounded-md box-border"
          >
        </textarea>
      </div>
      <div>
        <Button />
      </div>
      <input type="hidden" name="form-name" value="contact" />
    </form>
  )
}
