



import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20 text-red">
      <div className="text-center">
       

        <div className="font-bold text-3xl">Yeasin CHowdhuriy</div>

        <div className="w-max flex items-center gap-2 mx-auto mt-2">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="Mail Icon"
            width={24}
            height={24}
          />
          <span>depressedman996@gmail.com</span>
        </div>
      </div>

   <div className="text-center sm:flex items-center justify-between
          border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Yeasin Chowdhuriy. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

