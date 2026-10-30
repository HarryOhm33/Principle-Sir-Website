import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import { Link } from "react-router-dom";

export default function Footer() {
  const { theme } = useTheme();

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/dr-sandeep-tiwari-7a180629",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      url: "mailto:sandeeptiwari1970@gmail.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Publications", path: "/publications" },
    { name: "Patents", path: "/patents" },
    { name: "Awards", path: "/awards" },
    { name: "Achievements", path: "/achievements" },
    { name: "Memberships", path: "/memberships" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`${theme.cardBg} ${theme.shadow} border-t ${theme.border} mt-10 sm:mt-16`}
    >
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* About Section */}
          <motion.div whileHover={{ y: -5 }}>
            <h3 className={`text-xl font-bold mb-3 ${theme.primary}`}>
              Prof. (Dr.) Sandeep Tiwari
            </h3>
            <p className={`${theme.text} text-sm leading-relaxed mb-2`}>
              Director, Sub Regional Science City and Innovation Hub, Bodh Gaya (on deputation) & Principal, Government Engineering College, Sheikhpura (DSTTE Bihar).
            </p>
            <p className={`${theme.accent} text-xs`}>
              30+ years in academic administration, research, innovation & incubation.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div whileHover={{ y: -5 }}>
            <h3 className={`text-xl font-bold mb-4 ${theme.primary}`}>
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link, index) => (
                <motion.li whileHover={{ x: 5 }} key={index}>
                  <Link
                    to={link.path}
                    className={`${theme.text} hover:${theme.secondary} transition text-sm font-medium`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div whileHover={{ y: -5 }}>
            <h3 className={`text-xl font-bold mb-4 ${theme.primary}`}>
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`${theme.secondary} hover:opacity-80 transition`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <div className={`mt-4 text-xs ${theme.accent} leading-relaxed space-y-1`}>
              <p>
                <strong className={theme.text}>Office:</strong> Sub Regional Science City & Innovation Hub, Bodh Gaya, Bihar
              </p>
              <p>
                <strong className={theme.text}>Address:</strong> CPC-001, Omaxe Palm Green Society, Sector MU, Greater Noida, Uttar Pradesh
              </p>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`border-t ${theme.border} mt-8 pt-6 text-center ${theme.accent} text-xs`}
        >
          <p>
            © {new Date().getFullYear()} Prof. (Dr.) Sandeep Tiwari. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
