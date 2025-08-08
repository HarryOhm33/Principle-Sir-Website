import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import { useTheme } from "../context/themeContext";

export default function Footer() {
  const { theme } = useTheme();

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-xl" />,
      url: "https://linkedin.com",
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
      url: "mailto:contact@example.com",
      label: "Email",
    },
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
        <div className="grid md:grid-cols-3 gap-8">
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
              <motion.li whileHover={{ x: 5 }}>
                <a
                  href="#about"
                  className={`${theme.text} hover:${theme.secondary} transition`}
                >
                  About
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a
                  href="#experience"
                  className={`${theme.text} hover:${theme.secondary} transition`}
                >
                  Experience
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a
                  href="#publications"
                  className={`${theme.text} hover:${theme.secondary} transition`}
                >
                  Publications
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a
                  href="#projects"
                  className={`${theme.text} hover:${theme.secondary} transition`}
                >
                  Projects
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a
                  href="#achievements"
                  className={`${theme.text} hover:${theme.secondary} transition`}
                >
                  Achievements
                </a>
              </motion.li>
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
            <p className={`mt-4 ${theme.text}`}>
              Darbhanga College of Engineering
              <br />
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
