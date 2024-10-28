import React from 'react';
import baldo from '../../Images/baldo_bros.png';

const ShowDetails = () => (
  <div className="flex-1 pt-4 pr-4 flex flex-col lg:flex-row border-2 border-purple-800">
    <img
      src={baldo}
      alt="Baldo Bros Poster"
      className="w-20 object-cover mx-auto md:mb-0 md:w-60"
    />

    <div className="flex flex-col text-left md:pl-3 border-2 border-yellow-500">
      <h2 className="text-sm md:text-2xl">DATE - TBA</h2>
      <h3 className="text-sm md:text-4xl text-white">Baldo Bros</h3>
      <p className="text-xs md:text-xs text-white pt-4 pb-4">
        In a quirky, lighthearted skit, "The Baldo Bros" take the stage to tackle the world of web development—one ridiculous website at a time! 
      </p>

      <div className="flex flex-row justify-between text-xs md:text-base text-white">
        <h3>Ticket Price</h3>
        <h3>$10</h3>
      </div>

      <div className="flex flex-row items-end justify-between h-full space-x-4 mt-4">
        <a
          href="https://example.com/read-more"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-[#703B71] text-[#703B71] py-1 px-2 md:py-2 md:px-4 rounded hover:bg-[#703B71] hover:text-black transition-colors duration-300"
        >
          Read More
        </a>
        <a
          href="https://example.com/buy-tickets"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-1 px-2 md:py-2 md:px-4 rounded hover:opacity-80"
          style={{ backgroundColor: "#F1C570" }}
        >
          Buy Tickets
        </a>
      </div>
    </div>
  </div>
);

export default ShowDetails;
