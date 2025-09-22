// 00000000000000000000000000000000000000000000000000000000000
"use client"; // ✅ Required for useState

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets"; // Make sure this file and image exist

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "01718526-d2b4-4269-ad47-40947cca77dc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.error("Error:", data);
      setResult("Submission failed ❌");
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 dark:bg-none"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="p-3 outline-none border-[0.5px] border-gray-400 
            rounded-md bg-gray-200 dark:bg-darkHover/30 dark:border-white/90"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="p-3 outline-none border-[0.5px] border-gray-400 
            rounded-md bg-gray-200 dark:bg-darkHover/30 dark:border-white/90"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 
            rounded-md bg-gray-200  mb-6 dark:bg-darkHover/30 dark:border-white/90"
          ></textarea>

          <button
            type="submit"
            className="group relative py-3 px-10 w-max mx-auto flex items-center gap-3 
             overflow-hidden rounded-full bg-gradient-to-r from-yellow-200 to-yellow-500 
             text-black font-semibold shadow-md transition-all duration-500 
             hover:shadow-2xl hover:scale-105"
          >
            {/* Shine Effect */}
            <span
              className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 
                   blur-xl transition-opacity duration-500"
            ></span>

            {/* Button Text */}
            <span className="relative z-10">Send Message</span>

            {/* Arrow Icon */}
            <span className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">
              <Image
                src={assets.right_arrow_white}
                alt="Arrow"
                width={20}
                height={20}
              />
            </span>
          </button>

          <p className="text-center mt-4 text-sm text-gray-700 font-medium">
            {result}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Contact;
