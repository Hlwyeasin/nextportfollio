import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const About = ({ isDarkMode }) => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me </h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {/* Profile Image */}
        <div className="relative w-64 sm:w-80 h-80 rounded-3xl overflow-hidden">
          <Image
            src={assets.myprofile_img}
            alt="user"
            fill
            className="rounded-3xl object-cover"
          />
        </div>

        {/* About Text */}
        <div className="flex-1">
          <p className="mb-6">
            I am an experienced Frontend Developer with over a decade of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>

          {/* Tools */}
          <h4 className="my-6 text-gray-700 font-Ovo dark:text-black">
            Tools I use
          </h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center
                 w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg 
                 cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="Tool" width={28} height={28} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
