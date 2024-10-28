import React from "react";
import baldo from "../Images/baldo_bros.png";
import Button from "../Components/Misc/Button";

export default function Upcoming() {
  return (
    <div className="container flex flex-col justify-center items-center w-5/6 page h-screen">
      <div className="flex text-left w-full ">
        <h1 className="text-sm md:text-8xl tracking-widest">Upcoming Shows</h1>
      </div>

      <div className="flex flex-col md:flex-row w-full">
        <div className="flex-1 pt-4 pr-4 flex flex-col lg:flex-row">
          <img
            src={baldo}
            alt="Baldo Bros Poster"
            className="w-20 object-cover mx-auto md:mb-0 md:w-60"
          ></img>

          <div className="flex flex-col text-left md:pl-3">
            <h2 className="text-sm md:text-2xl">DATE - TBA</h2>
            <h3 className="text-sm md:text-4xl text-white">Baldo Bros</h3>
            <p className="text-xs md:text-xs text-white pt-4 pb-4">
              In a quirky, lighthearted skit, "The Baldo Bros" take the stage to
              tackle the world of web development—one ridiculous website at a
              time! This duo consists of Davy, the charming but slightly
              bumbling bald brother, and his slightly more competent,
              hair-covered sibling, Calvin. 
            </p>

             {/* In their quest to create a website
              for “The Optimisribles,” the Baldo Bros unleash hilarity with
              playful jabs about Davy's baldness and absurd coding blunders,
              like bouncing mushrooms and chaotic neon colors. Their misguided
              attempts lead to plenty of physical comedy, culminating in a live,
              accidental website launch that leaves the audience in stitches.
              Join the Baldo Bros for a side-splitting adventure that showcases
              the fun (and folly) of web development! */}

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

        <div className="hidden lg:flex p-4 flex-col justify-evenly">
          <h1>More To Be Announced</h1>

          <h2>
            Subscribe to be the first to know about all our upcoming events
          </h2>
          <div className="mt-5 w-full flex justify-center">
            {/* Input container */}
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
      </div>
    </div>
  );
}
