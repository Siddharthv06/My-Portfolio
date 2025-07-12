import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ModernBookCover, { BookHeader, BookTitle, BookDescription } from "./ModernBookCover";
import { FaBook } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React", level: 90, color: "bg-cyan-400" },
  { name: "Python", level: 80, color: "bg-purple-400" },
  { name: "c++", level: 75, color: "bg-blue-400" },
  { name: "UI/UX", level: 85, color: "bg-green-400" },
];

const AboutSection = () => {
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
      id="about" 
      className="min-h-screen h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center px-4  relative"
    >
      <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-20 pl-0 md:pl-8">
        <div className="flex-1 text-left">
          <motion.h2 
            className="text-6xl font-['My_Soul',cursive] text-white mb-6 text-center lowercase"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ABOUT ME
              
            
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TypeAnimation
              sequence={[
                'I am passionate about building interactive and visually appealing web applications. With a strong background in software engineering and a love for 3D and animation, I strive to create experiences that are both functional and beautiful.',
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="cursor-default select-none"
              repeat={1}
            />
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-start gap-2 mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {skills.map(skill => (
              <span key={skill.name} className={`${skill.color} text-black px-2 py-1 rounded-full font-semibold shadow-lg text-sm`}>{skill.name}</span>
            ))}
          </motion.div>
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {skills.map((skill, index) => (
              <div key={skill.name} className="text-left">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-200 font-semibold">{skill.name}</span>
                  <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ 
                      delay: 0.8 + index * 0.2,
                      duration: 1.5,
                      ease: "easeOut"
                    }}
                    className={`${skill.color} h-4 rounded-full shadow-lg`}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Book Cover on the right */}
        <motion.div 
          className="hidden lg:flex flex-shrink-2 ml-[120px]"
          initial={{ opacity: 0, x: -1200 }}
          whileInView={{ opacity: 1, x: -100,y:100 }}
          transition={{ duration: 1.0, delay: 0.8 }}
        >
          <a
            href="/resume.pdf"
            download
            className="group cursor-pointer active:cursor-progress"
            aria-label="Download my resume"
          >
            <ModernBookCover
              size="lg"
              color="zinc"
              className="group-hover:scale-[1.05] transition-transform duration-500"
            >
              <BookHeader>
                <FaBook size={24} className="text-cyan-200" />
              </BookHeader>
              <BookTitle>My Resume</BookTitle>
              <BookDescription>Click to download my CV as PDF</BookDescription>
            </ModernBookCover>
          </a>
        </motion.div>

        {/* Mobile Book Cover */}
        <motion.div 
          className="flex lg:hidden justify-center mt-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.8 }}
        >
          <a
            href="/resume.pdf"
            download
            className="group cursor-pointer active:cursor-progress"
            aria-label="Download my resume"
          >
            <ModernBookCover
              size="md"
              color="cyan"
              className="group-hover:scale-105 transition-transform duration-500"
            >
              <BookHeader>
                <FaBook size={20} className="text-cyan-200" />
              </BookHeader>
              <BookTitle>My Resume</BookTitle>
              <BookDescription>Tap to download my CV</BookDescription>
            </ModernBookCover>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;