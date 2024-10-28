import React from 'react';
import UpcomingTitle from './UpcomingTitle';
import ShowDetails from './ShowDetails';
import SubscribeSection from './SubscribeSection';

const Upcoming = () => (
  <div className="container flex flex-col justify-center items-center w-5/6 page mx-auto h-screen border-2 border-green-500">
    <UpcomingTitle />

    <div className="flex flex-col md:flex-row w-full border-2 border-blue-500 ">
      <ShowDetails />
      <SubscribeSection />
    </div>
  </div>
);

export default Upcoming;
