import React from 'react';
import Button from '../Misc/Button';

export default function Form() {
  return (
    <form className="w-full md:w-1/2 flex flex-col md:flex-col h-3/5 md:h-full md:justify-center">
      <h3 className="text-xl sm:text-2xl lg:text-3xl mb-4">Any questions? Get in touch!</h3>
      <div className="flex gap-4 flex-row">
        <div className="flex flex-col w-full">
          <label className="text-left text-xs md:text-sm text-[#E4CC5D]" htmlFor="fname">First Name:</label>
          <input
            className="w-full p-1 sm:p-2 text-xs sm:text-sm md:text-base border-2 border-[#6A3276] rounded-md bg-[#6a3276] bg-opacity-20 text-white"
            type="text"
            name="fname"
            id="contact-form-fname"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-left text-xs md:text-sm text-[#E4CC5D]" htmlFor="sname">Second Name:</label>
          <input
            className="w-full p-1 sm:p-2 text-xs sm:text-sm md:text-base border-2 border-[#6A3276] rounded-md bg-[#6a3276] bg-opacity-20 text-white"
            type="text"
            name="sname"
            id="contact-form-sname"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-left text-xs md:text-sm text-[#E4CC5D]" htmlFor="email">Enter Your Email:</label>
        <input
          className="w-full p-1 sm:p-2 text-xs sm:text-sm md:text-base border-2 border-[#6A3276] rounded-md bg-[#6a3276] bg-opacity-20 text-white"
          type="email"
          name="email"
          id="contact-form-email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-left text-xs md:text-sm text-[#E4CC5D]" htmlFor="subject">Enter Your Subject:</label>
        <input
          className="w-full p-1 sm:p-2 text-xs sm:text-sm md:text-base border-2 border-[#6A3276] rounded-md bg-[#6a3276] bg-opacity-20 text-white"
          type="text"
          name="subject"
          id="contact-form-subject"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-left text-xs md:text-sm text-[#E4CC5D]" htmlFor="message">Enter Your Message:</label>
        <textarea
          name="message"
          id="contact-form-message"
          cols="20"
          rows="4"
          className="w-full p-1 sm:p-2 text-xs sm:text-sm md:text-base border-2 border-[#6A3276] rounded-md bg-[#6a3276] bg-opacity-20 text-white"
        ></textarea>
      </div>
      <div className="mt-4">
        <Button />
      </div>
      <input type="hidden" name="form-name" value="contact" />
    </form>
  );
}
