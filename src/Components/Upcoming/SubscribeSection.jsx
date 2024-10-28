import React from 'react';
import Button from '../Misc/Button';

const SubscribeSection = () => (
  <div className="hidden lg:flex p-4 flex-col justify-evenly border-2 border-red-500">
    <h1>More To Be Announced</h1>
    <h2>Subscribe to be the first to know about all our upcoming events</h2>
    
    <div className="mt-5 w-full flex justify-center">
      <form className="hidden lg:flex flex-col w-full sm:w-11/12 lg:flex-row gap-5 h-full">
        <div className="flex-1">
          <div className="formField">
            <input
              className="w-full p-3 text-lg border-3 border-[#6A3276] rounded-md"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="flex-2">
          <div className="formField">
            <Button />
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default SubscribeSection;
