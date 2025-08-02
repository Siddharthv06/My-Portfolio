import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import SmokeEffect from "./components/SmokeEffect";
import ModernBookCover, { BookHeader, BookTitle, BookDescription } from "./components/ModernBookCover";
import { FaBook } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  const [aboutInView, setAboutInView] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([entry]) => setAboutInView(entry.isIntersecting),
        { threshold: 0.4 }
      );
      if (aboutRef.current) observer.observe(aboutRef.current);
      return () => observer.disconnect();
    }
  }, []);

  const book = (
    <motion.div layoutId="resume-book" key="resume-book">
      <ModernBookCover size="lg" color="zinc">
        <BookHeader>
          <FaBook size={24} className="text-cyan-200" />
        </BookHeader>
        <BookTitle>My Resume</BookTitle>
        <BookDescription>Click to download my CV as PDF</BookDescription>
      </ModernBookCover>
    </motion.div>
  );

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen relative font-winky">
      <title>My Portfolio</title>
      <div className="w-full h-full">
        <SmokeEffect />
      </div>
      <Header />
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen scrollbar-none overflow-x-hidden">
        <div className="snap-start">
          <Hero showBook={!aboutInView} bookComponent={book} />
        </div>
        <div className="snap-start">
          <AboutSection
            ref={aboutRef}
            showBook={aboutInView}
            bookComponent={book}
          />
        </div>
        <div className="snap-start"><ProjectsSection /></div>
        <div className="snap-start"><ContactSection /></div>
      </div>
    </div>
  );
}
