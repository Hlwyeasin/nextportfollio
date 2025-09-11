


import Image from "next/image";
import React from "react";

const projects = [
  {
    title: "E-Commerce Website",
    description: "Next.js, Tailwind & Stripe payment",
    image: "/assets/project01.png", // public/assets/project01.png
    link: "https://ecommerce1-flame-theta.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "Modern personal portfolio with animations",
    image: "/assets/project01.png", // public/assets/portfolio.png
    link: "https://ecommerce1-portfolio-link.com",
  },
  {
    title: "Blog Platform",
    description: "Full-stack blog with authentication",
    image: "/assets/project01.png", // public/assets/blog.png
    link: "https://ecommerce1-blog-link.com",
  },
];

const Work = ({ isDarkMode }) => {
  return (
    <div
      id="work"
      className={`w-full px-[12%] py-10 scroll-mt-20 ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      {/* Header */}
       <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        welcome to my wed development protfollio! Explore to collection of
        projects showcasing my expertise in front -end development.
      </p>

      {/* Project Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg group 
            bg-white/60 dark:bg-black/40 backdrop-blur-lg border border-gray-200 dark:border-gray-700
            hover:shadow-2xl hover:scale-105 transition-all duration-500"
          >
            {/* Project Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={project.image} // <-- এখানে পরিবর্তন
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 dark:bg-white/20 opacity-0 group-hover:opacity-100 
                flex flex-col justify-center items-center text-center text-white dark:text-black 
                transition-opacity duration-500 p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;




