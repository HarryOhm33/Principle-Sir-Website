import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/themeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleTheme, theme } = useTheme();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Publications", path: "/publications" },
    { name: "Projects", path: "/patents" },
    { name: "Achievements", path: "/achievements" },
    { name: "Contact", path: "/contact" },
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`${theme.navBg} ${theme.navText} p-4 flex justify-between items-center sticky top-0 z-50 shadow-lg`}
    >
      {/* Logo/Name */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="font-bold text-xl md:text-2xl flex items-center"
      >
        <span className="bg-[#F59E0B] text-[#1E3A8A] px-2 py-1 rounded mr-2 text-sm md:text-base">
          Dr.
        </span>
        <span>Sandeep Tiwari</span>
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          <motion.div
            key={link.path}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={link.path}
              className={`${theme.hover} transition-all duration-300 font-medium`}
            >
              {link.name}
            </Link>
          </motion.div>
        ))}

        {/* Theme Toggle - Desktop */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full focus:outline-none"
          aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
        >
          {darkMode ? (
            <FaSun className="text-[#F59E0B] text-xl" />
          ) : (
            <FaMoon className="text-gray-300 text-xl" />
          )}
        </motion.button>
      </div>

      {/* Mobile Controls */}
      <div className="flex md:hidden items-center gap-4">
        {/* Theme Toggle - Mobile */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="p-2 rounded-full focus:outline-none"
          aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
        >
          {darkMode ? (
            <FaSun className="text-[#F59E0B] text-xl" />
          ) : (
            <FaMoon className="text-gray-300 text-xl" />
          )}
        </motion.button>

        {/* Mobile menu button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="text-xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FaTimes className="text-white" />
          ) : (
            <FaBars className="text-white" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className={`md:hidden absolute top-16 left-0 right-0 ${theme.mobileMenuBg} flex flex-col space-y-4 p-4 shadow-xl`}
          >
            {navLinks.map((link) => (
              <motion.div key={link.path} variants={linkVariants}>
                <Link
                  to={link.path}
                  className={`block py-3 px-4 ${theme.hover} transition-all duration-300 rounded-md`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
