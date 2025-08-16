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
        className={`${theme.cardBg} p-6 rounded-lg ${theme.shadow} text-center`}
        whileHover={{ y: -5 }}
      >
        <p className={theme.text}>
          📧 Email:{" "}
          <a href="mailto:sandeep@example.com" className="underline">
            sandeep@example.com
          </a>
        </p>
        <p className={theme.text}>
          🔗 LinkedIn:{" "}
          <a href="https://linkedin.com/in/dr-sandeep" className="underline">
            linkedin.com/in/dr-sandeep
          </a>
        </p>
        <p className={theme.text}>
          📍 Principal, Darbhanga College of Engineering, Bihar
        </p>
      </motion.div>
    </motion.section>
  );
}
