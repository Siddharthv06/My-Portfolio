import { motion } from "framer-motion";
import BlurText from "./BlurText";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";


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
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] z-50">
      <nav
        className="flex items-center justify-between px-10 py-3 rounded-full min-h-[64px] w-full"
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
        {/* Nav Links */}
        <div className="flex space-x-8">
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
        {/* Social Icons */}
        <div className="flex items-center space-x-4">
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
      </nav>
    </header>
  );
};

export default Header;