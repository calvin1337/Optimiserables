import React from "react";
import OPCard from "./OPCard";



export default function WhoAreWe() {
 
  return (
    <div className="flex flex-col items-center w-screen h-screen"> 
      <div className="flex flex-col md:flex-row w-full md:w-5/6 h-full">
        <OPCard />
      </div>
    </div>
  );
}
