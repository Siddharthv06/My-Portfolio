import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Folder from './Folder';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "3D Portfolio",
    description: "A modern 3D portfolio built with React, Three.js, and Framer Motion. Features interactive 3D elements and smooth animations.",
    technologies: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    technologies: ["React", "Firebase", "Socket.io", "Material-UI"],
    link: "#"
  }
];

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      snap: {
        snapTo: "start",
        duration: { min: 0.2, max: 0.5 },
        delay: 0,
        ease: "power1.inOut"
      },
      markers: false
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="min-h-screen h-auto bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center px-2 sm:px-4 font-winky"
    >
      <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-16">
        {/* Project Info on the left */}
        <motion.div
          className="flex-1 text-left"
          initial={{ opacity: 0, x: -600 }}
          whileInView={{ opacity: 1, x: -200 }}
          transition={{ duration: 1.0, ease: "easeIn" }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-['My_Soul',cursive] text-white mb-4 sm:mb-6 text-left lowercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
          >
            projects
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-20 text-left max-w-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
          >
            I have created project mainly on personal level , participated in multiple hackathon ,few of my projects are in this folder [CLICK ON THE FOLDER TO EXPLORE PROJECTS]
          </motion.p>
        </motion.div>
        {/* Folder on the right */}
        <motion.div
          initial={{ opacity: 0, y: -400 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex-shrink-0 ml-0 lg:ml-[60px] xl:ml-[120px] w-full lg:w-auto mt-6 lg:mt-0"
        >
          <Folder 
            size={3} 
            color="#5227FF" 
            className="custom-folder"
            items={[
              <a 
                key="portfolio"
                href={projects[0].link}
                className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm px-2 text-center hover:scale-105 transition-transform duration-300"
              >
                {projects[0].title}
              </a>,
              <a 
                key="ecommerce"
                href={projects[1].link}
                className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm px-2 text-center hover:scale-105 transition-transform duration-300"
              >
                {projects[1].title}
              </a>,
              <a 
                key="taskapp"
                href={projects[2].link}
                className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm px-2 text-center hover:scale-105 transition-transform duration-300"
              >
                {projects[2].title}
              </a>
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;