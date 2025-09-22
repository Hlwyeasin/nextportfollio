





import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="text-black w-11/12 max-w-3xl text-center
     mx-auto h-screen flex flex-col items-center justify-center gap-4">
      
      {/* Profile Image */}
      <div className="relative h-32 w-32">
        <Image
          src={assets.myprofile_img}
          alt="myprofile_img"
          fill
          className="rounded-full object-cover"
        />
      </div>

      {/* Introduction */}
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Yeasin Chowdhuriy
        <Image src={assets.hand_icon} alt="hand" width={24} height={24} />
      </h3>

      <h1 className="text-3xl sm:text-6xl font-Ovo">
        Frontend Web Developer based in Bangladesh
      </h1>

      <p className="max-w-2xl mx-auto font-Ovo">
        I am a Frontend developer from Bangladesh, Dhaka with 1 year of experience 
        in multiple companies like Brain Station.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">

        {/* Contact Button */}
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black
           text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="arrow" width={16} height={16} />
        </a>

        {/* Resume Button */}
        <a
          download
          className="px-10 py-3 border rounded-full border-gray-500
           flex items-center gap-2 bg-white dark:text-black"
        >
          My Resume
          <Image src={assets.download_icon} alt="download" width={16} height={16} />
        </a>

      </div>
    </div>
  );
};

export default Header;
