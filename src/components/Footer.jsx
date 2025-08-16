import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import { Link } from "react-router-dom";

export default function Footer() {
  const { theme } = useTheme();

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/dr-sandeep-tiwari-7a186029",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter className="text-xl" />,
      url: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com",
      label: "GitHub",
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
    { name: "Memberships", path: "/memberships" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`${theme.cardBg} ${theme.shadow} mt-16`}
    >
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* About Section */}
          <motion.div whileHover={{ y: -5 }}>
            <h3 className={`text-xl font-bold mb-4 ${theme.primary}`}>
              Prof. (Dr.) Sandeep Tiwari
            </h3>
            <p className={theme.text}>
              Distinguished academic leader with 25+ years in education,
              research, and industry experience.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div whileHover={{ y: -5 }}>
            <h3 className={`text-xl font-bold mb-4 ${theme.primary}`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <motion.li whileHover={{ x: 5 }} key={index}>
                  <Link
                    to={link.path}
                    className={`${theme.text} hover:${theme.secondary} transition font-medium`}
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
            <p className={`mt-4 text-sm ${theme.text}`}>
              Darbhanga College of Engineering <br />
              Darbhanga, Bihar, India
            </p>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`border-t ${theme.border} mt-8 pt-6 text-center ${theme.accent}`}
        >
          <p>
            © {new Date().getFullYear()} Prof. (Dr.) Sandeep Tiwari. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
