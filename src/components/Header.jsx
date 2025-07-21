import { motion } from "framer-motion";
import BlurText from "./BlurText";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { useState, useEffect } from "react";


const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const socialIcons = [
  { Icon: FiGithub, link: "https://github.com/", delay: 1.5 },
  { Icon: FiLinkedin, link: "https://linkedin.com/", delay: 1.7 },
  { Icon: FiInstagram, link: "https://instagram.com/", delay: 1.9 },
];

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] z-50">
      <nav
        className="flex items-center justify-between px-4 sm:px-10 py-3 rounded-full min-h-[64px] w-full"
        style={{
          background: 'rgba(0,0,0,0.1)',
          boxShadow: '0px 0px 30px rgba(227,228,237,0.37)',
          border: '2px solid rgba(255,255,255,0.18)',
          backdropFilter: 'blur(30px)',
        }}
      >
        {/* Logo */}
        <div className="flex items-center space-x-4 select-none">
          {/* User's avatar as logo */}
          <img src="/myAvatar.png" alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
          <span className="text-xl font-extrabold text-white tracking-widest">
            <BlurText text="PORTFOLIO" className="uppercase" animateBy="letters" delay={30} />
          </span>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 ml-auto z-50"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Nav Links (desktop) */}
        <div className="hidden sm:flex space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative flex items-center font-bold text-lg text-white px-3 py-1 bg-transparent border-none outline-none cursor-pointer tracking-wide transition-all duration-200 hover:opacity-80"
              whileHover={{ y: -2 }}
            >
              <BlurText text={item.name} className="uppercase" animateBy="letters" delay={30} />
            </motion.button>
          ))}
        </div>
        {/* Social Icons (desktop) */}
        <div className="hidden sm:flex items-center space-x-4">
          {socialIcons.map(({ Icon, link, delay }, idx) => (
            <motion.a
              key={link}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
              className="text-white hover:text-gray-300 transition duration-200 cursor-pointer p-2 rounded-full hover:bg-white hover:bg-opacity-10"
              style={{ zIndex: 1000 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
        {/* Mobile Menu Dropdown + Overlay */}
        {menuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-40 z-40 animate-fade-in"
              onClick={() => setMenuOpen(false)}
            />
            {/* Dropdown */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
              className="sm:hidden fixed top-0 left-0 w-full rounded-b-2xl bg-black bg-opacity-95 flex flex-col items-center py-8 space-y-6 z-50 shadow-2xl"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMenuOpen(false);
                  }}
                  className="text-white text-lg font-bold py-2 px-4 w-full text-center hover:bg-white hover:bg-opacity-10 rounded-lg transition"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex space-x-6 mt-4">
                {socialIcons.map(({ Icon, link }, idx) => (
                  <a
                    key={link}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition duration-200 cursor-pointer p-2 rounded-full hover:bg-white hover:bg-opacity-10"
                    style={{ zIndex: 1000 }}
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;