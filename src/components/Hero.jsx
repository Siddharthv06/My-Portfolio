import React, { useState, useEffect } from "react";
import { delay, motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import Particles from './Particles';
import BlurText from "./BlurText";
import LightningText from './lightning-text';

const fontmotion = (delay) => ({
  initial: { opacity: 0, y: 80 },
  animate: { opacity: 1, y: 0 },
  transition: {
    type: "spring",
    stiffness: 40,
    damping: 25,
    delay,
    duration: 1.5,
  },
});

const Typewriter = () => (
  <TypeAnimation
    sequence={[
      'software developer',
      1000,
      'software engineer',
      1000,
      'good lisener',
      1000,
      'good observer',
      1000,
      'keen lerner',
      1000,
      'web developer',
      1000
    ]}
    wrapper="span"
    speed={50}
    className="text-3xl md:text-4xl lg:text-5xl inline-block cursor-default select-none font-['My_Soul',cursive]"
    repeat={Infinity}
  />
);

const Hero = ({ showBook, bookComponent }) => {
  const [showLightning, setShowLightning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLightning(true), 2000); // 2s delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen h-screen w-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-end justify-center relative overflow-hidden ">
      {/* Background Particles */}
      <Particles
        particleColors={['#3b82f6', '#8b5cf6', '#06b6d4']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
      />
      {/* Lightning Text Overlay with delayed start */}
      {showLightning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <LightningText copy="Siddharth," />
        </motion.div>
      )}
      {/* Book - absolutely positioned center bottom */}
      {/* ...existing code for book... */}
      <div
        className={[
          "z-40",
          "absolute",
          "flex",
          "flex-col",
          "items-end",
          "justify-end",
          "select-none",
          "w-full",
          "pointer-events-auto",
        ].join(" ")}
        style={{
          bottom: "18%",
          right: "40%",
          left: "auto",
          position: "absolute",
        }}
      >
        <motion.div
          {...fontmotion(3.6)}
          className={[
            "mt-4",
            "text-5xl",
            "md:text-4xl",
            "font-medium",
            "text-white",
            "tracking-tight",
            "text-right",
            "font-['Cedarville_Cursive',cursive]",
            "pointer-events-auto",
          ].join(" ")}
        >
          <Typewriter />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
