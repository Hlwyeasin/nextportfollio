// import Image from "next/image";
// import React from "react";


// const projects = [
//   {
//     title: "E-Commerce Website",
//     description: "Next.js, Tailwind & Stripe payment",
//     // image: "../../assets/project01.png",
     
//     link: "https://ecommerce1-flame-theta.vercel.app/",
//   },
//   {
//     title: "Portfolio Website",
//     description: "Modern personal portfolio with animations",
//     // image: "../../assets/project01.png",
     
//     link: "https://ecommerce1-portfolio-link.com",
//   },
//   {
//     title: "Blog Platform",
//     description: "Full-stack blog with authentication",
//     // image: "../../assets/project01.png",
    
//     link: "https://ecommerce1-blog-link.com",
//   },
// ];

// const Work = ({ isDarkMode }) => {
//   return (

//     <div
//       id="work"
//       className={`w-full px-[12%] py-10 scroll-mt-20 ${
//         isDarkMode ? "text-white" : "text-black" }`} >

          
//       {/* Header */}
//       <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
//       <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
//       <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
//         welcome to my wed development protfollio! Explore to collection of
//         projects showcasing my expertise in front -end development.
//       </p>

      



    
//     </div>

//   );
// };

// export default Work;



// 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "E-Commerce Website",
//     description: "Next.js, Tailwind & Stripe payment system",
//     image: "/assets/project01.png",
//     link: "https://ecommerce1-flame-theta.vercel.app/",
//   },
//   {
//     title: "Portfolio Website",
//     description: "Modern personal portfolio with animations",
//     image: "/assets/project02.png",
//     link: "https://portfolio-link.com",
//   },
//   {
//     title: "Blog Platform",
//     description: "Full-stack blog app with authentication",
//     image: "/assets/project03.png",
//     link: "https://blog-link.com",
//   },
//   {
//     title: "Landing Page",
//     description: "Responsive landing page with Tailwind CSS",
//     image: "/assets/project04.png",
//     link: "https://landing-page-link.com",
//   },
//   {
//     title: "Dashboard App",
//     description: "Admin dashboard with charts and analytics",
//     image: "/assets/project05.png",
//     link: "https://dashboard-link.com",
//   },
// ];

// const Work = ({ isDarkMode }) => {
//   return (
//     <div
//       id="work"
//       className={`w-full px-[12%] py-10 scroll-mt-20 ${
//         isDarkMode ? "text-white" : "text-black"
//       }`}
//     >
//       {/* Header */}
//       <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
//       <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
//       <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
//         Welcome to my web development portfolio! Explore the collection of
//         projects showcasing my expertise in front-end development.
//       </p>

//       {/* Projects Grid */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//          className="bg-white dark:bg-gray-800 shadow-md rounded-2xl
//                  overflow-hidden hover:shadow-xl transition"
//           >
//             <a href={project.link} target="_blank" rel="noopener noreferrer">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 width={600}
//                 height={400}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold mb-2 font-Ovo">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-400 dark:text-gray-300 text-sm">
//                   {project.description}
//                 </p>
//               </div>
//             </a>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Work;



  //  333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333

  import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Website",
    description: "Next.js, Tailwind & Stripe payment system",
    image: "/assets/project01.png",
    link: "https://ecommerce1-flame-theta.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "Modern personal portfolio with animations",
    image: "/assets/project02.png",
    link: "https://portfolio-link.com",
  },
  {
    title: "Blog Platform",
    description: "Full-stack blog app with authentication",
    image: "/assets/project03.png",
    link: "https://blog-link.com",
  },
  {
    title: "Landing Page",
    description: "Responsive landing page with Tailwind CSS",
    image: "/assets/project04.png",
    link: "https://landing-page-link.com",
  },
  {
    title: "Dashboard App",
    description: "Admin dashboard with charts and analytics",
    image: "/assets/project05.png",
    link: "https://dashboard-link.com",
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
        Welcome to my web development portfolio! Explore the collection of
        projects showcasing my expertise in front-end development.
      </p>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          
          <motion.div
            key={index}
            className="h-64 bg-cover bg-center flex items-end p-4 rounded-xl shadow-lg"
          style={{ backgroundImage: `url(${project.bgImage})` }}
            whileHover={{ scale: 1.05 }}
            // className="bg-white dark:bg-gray-800 shadow-md rounded-2xl
            //      overflow-hidden hover:shadow-xl transition"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ImageWithFallback
                // src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 font-Ovo">
                  {project.title}
                </h3>
                <p className="text-gray-400 dark:text-gray-300 text-sm">
                  {project.description}
                </p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// 🔹 Custom Image Component with Fallback
const ImageWithFallback = ({ src, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div className="relative">
      <Image
        {...props}
        src={imgSrc || "/assets/default.png"}
        alt={alt}
        onError={() => setImgSrc("/assets/default.png")}
      />
      {imgSrc === "/assets/default.png" && (
        <p className="absolute bottom-2 left-2 text-xs text-red-400 bg-black/60 px-2 py-1 rounded">
          Image not found
        </p>
      )}
    </div>
  );
};

export default Work;
