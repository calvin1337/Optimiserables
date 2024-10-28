import React from 'react';
import Button from '../Misc/Button';

export default function Form() {
  return (
    <form className="flex gap-4 flex-col w-full max-w-md mx-auto contact-form p-4">
      <h1 className="text-3xl md:text-4xl">
        Contact Us!
      </h1>
      <div className="flex gap-2 flex-col md:flex-row">
        <div className="flex flex-col w-full">
          <label className="text-left text-xs md:text-sm" htmlFor="fname">First Name</label>
          <input
            className="w-full p-2 text-sm md:text-base border-2 border-[#6A3276] rounded-md"
            type="text"
            name="fname"
            id="contact-form-fname"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-left text-xs md:text-sm" htmlFor="sname">Second Name</label>
          <input
            className="w-full p-2 text-sm md:text-base border-2 border-[#6A3276] rounded-md"
            type="text"
            name="sname"
            id="contact-form-sname"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-left text-xs md:text-sm" htmlFor="email">Enter Your Email</label>
        <input
          className="w-full p-2 text-sm md:text-base border-2 border-[#6A3276] rounded-md"
          type="email"
          name="email"
          id="contact-form-email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-left text-xs md:text-sm" htmlFor="subject">Enter Your Subject</label>
        <input
          className="w-full p-2 text-sm md:text-base border-2 border-[#6A3276] rounded-md"
          type="text"
          name="subject"
          id="contact-form-subject"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-left text-xs md:text-sm" htmlFor="message">Enter Your Message</label>
        <textarea
          name="message"
          id="contact-form-message"
          cols="20"
          rows="4"
          className="w-full p-2 text-sm md:text-base border-2 border-[#6A3276] rounded-md"
        ></textarea>
      </div>
      <div>
        <Button />
      </div>
      <input type="hidden" name="form-name" value="contact" />
    </form>
  );
}
