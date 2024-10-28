import React from "react";

const ActorInfo = ({ name, bio }) => (
  <div className="w-full text-left px-4">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-2">{name}</h2>
    <p className="text-white mb-4 text-sm sm:text-base">
      {bio || "No bio available."}
    </p>
  </div>
);

export default ActorInfo;
