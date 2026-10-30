import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { useTheme } from "../context/themeContext";

export default function ContactSection() {
  const { theme } = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16"
      id="contact"
    >
      <motion.h2
        className={`text-3xl font-bold mb-6 ${theme.primary} flex items-center`}
      >
        <FaEnvelope className="mr-3" /> Contact
      </motion.h2>

      <motion.div
        className={`${theme.cardBg} p-6 rounded-lg ${theme.shadow} border ${theme.border} text-center space-y-2`}
        whileHover={{ y: -5 }}
      >
        <p className={theme.text}>
          📧 Email:{" "}
          <a href="mailto:sandeeptiwari1970@gmail.com" className="underline font-medium">
            sandeeptiwari1970@gmail.com
          </a>
        </p>
        <p className={theme.text}>
          🔗 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/dr-sandeep-tiwari-7a180629"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium"
          >
            linkedin.com/in/dr-sandeep-tiwari-7a180629
          </a>
        </p>
        <p className={`${theme.accent} text-sm`}>
          📍 Director, Sub Regional Science City and Innovation Hub, Bodh Gaya (on deputation) | Principal, GEC Sheikhpura
        </p>
      </motion.div>
    </motion.section>
  );
}
