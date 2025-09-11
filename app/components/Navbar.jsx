


"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setScrool] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrool(true);
      else setScrool(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        {/* Logo */}
        <a href="#top">
          <div className="text-bold text-3xl">
            
            Yeasin CHowdhuriy
          </div>
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li><a href="#top" className="font-Ovo">Home</a></li>
          <li><a href="#about" className="font-Ovo">About me</a></li>
          <li><a href="#work" className="font-Ovo">My Work</a></li>
          <li><a href="#contact" className="font-Ovo">Contact me</a></li>
        </ul>

        {/* Right Buttons */}
        <div className="flex gap-4 items-center">
          {/* Dark Mode Toggle */}
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Toggle Theme"
              width={24}
              height={24}
            />
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-teal-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="Arrow"
              width={16}
              height={16}
            />
          </a>

          {/* Mobile Menu Button */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Mobile Side Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close Menu"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>

          <li><a href="#top" className="font-Ovo">Home</a></li>
          <li><a href="#about" className="font-Ovo">About me</a></li>
          <li><a href="#work" className="font-Ovo">My Work</a></li>
          <li><a href="#contact" className="font-Ovo">Contact me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
