import ActorDetails from "../Components/Misc/ActorSelect/ActorDetails"
import ActorSelect from "../Components/Misc/ActorSelect/ActorSelect"
import { useState } from "react";

function Team() {

  const [activeActor, setActiveActor] = useState(0);
  const [selectionCount, setSelectionCount] = useState(0);

  const handleActorClick = (index) => {
    setActiveActor(index);
  };

  const actors = [
    {
      name: "Michael Garden",
      src: require("../Images/Members/PortraitMichael_Clean.png"),
      bio: "Michael is an upcoming actor and writer charging in to perform at the Fringe for the 1st time in 2025. He will also be our costume designer which means he’ll be hunting through charity shops and hoping for the best.",
      socials: [
        {
          platform: "Instagram",
          link: "https://www.instagram.com/michaeljg212/",
        },
        {
          platform: "Spotlight",
          link: "https://app.spotlight.com/2210-7837-6789",
        },
        { platform: "X", link: "https://x.com/MichaelJGarden1" },
      ],
      wardrobe: [
        {
          src: require("../Images/Members/PortraitMichael_Clean.png"),
          style: "Original",
        },
        {
          src: require("../Images/Members/PortraitMichael.png"),
          style: "Hue Rotate 90",
          className: "hue-rotate-90",
        },
      ],
    },

    {
      name: "Ryan",
      src: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg",
      socials: [
        {
          platform: "Instagram",
          link: "https://www.instagram.com/finlaywilldonald/?next=%2F",
        },
      ],
    },

    {
      name: "Finlay Donald",
      src: require("../Images/Members/PortraitFinlay_Clean.png"),
      bio: "Finlay is a actor who has a flair for shakespeare but also enjoy’s the simple things in life such as collaboration and creativity to bring amazing theater to the public. See him and The Optimiserables at Fringe 2025",
      socials: [
        {
          platform: "Instagram",
          link: "https://www.instagram.com/finlaywilldonald/?next=%2F",
        },
      ],
    },

    {
      name: "Davy",
      src: "https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo=",
      bio: "Meow",
      socials: [
        {
          platform: "Instagram",
          link: "https://www.instagram.com/finlaywilldonald/?next=%2F",
        },
      ],
    },

    {
      name: "Calvin",
      src: "https://static.vecteezy.com/system/resources/thumbnails/007/234/162/small_2x/bengal-cat-resting-on-the-couch-funny-with-glasses-photo.jpg",
      socials: [
        {
          platform: "Instagram",
          link: "https://www.instagram.com/finlaywilldonald/?next=%2F",
        },
      ],
    },

    {
      name: "Paing",
      src: "https://catamazing.com/cdn/shop/files/catshark.jpg?v=1649869148",
      socials: [
        {
          platform: "Instagram",
          link: "https://www.instagram.com/finlaywilldonald/?next=%2F",
        },
      ],
    },

    {
      name: "Brooke Smith",
      src: "https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=1200",
      bio: "Brook is an upcoming actor who is having his fist performance at the Fringe in 2025, he’s the groups budgeting manager and will be making sure not too much ‘££’ get’s spent. Come see him and the fantastic Optimiserables at the Fringe 2025!",
      socials: [
        {
          platform: "Instagram",
          link: "https://www.instagram.com/finlaywilldonald/?next=%2F",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center w-screen h-screen">
    <ActorDetails />
    <ActorSelect actors={actors} />
  </div>
  )
}

export default Team