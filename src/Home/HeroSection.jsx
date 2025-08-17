import { motion } from "framer-motion";
import { useTheme } from "../context/themeContext";
import { FaDownload } from "react-icons/fa";

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-28 mt-25 md:mt-28 mb-35 md:mb-32 px-4 md:px-12"
    >
      {/* Left Side - Text Content */}
      <div className="text-center lg:text-left max-w-2xl w-full">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${theme.text}`}
        >
          Prof. (Dr.) Sandeep Tiwari
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`text-base sm:text-lg lg:text-xl mt-2 ${theme.primary} font-semibold`}
        >
          Principal, Darbhanga College of Engineering
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={`mt-4 ${theme.accent} leading-relaxed text-sm sm:text-base`}
        >
          Distinguished academic leader with 25+ years in education, 16 years in
          cutting-edge research, and 5 years of valuable industry experience.
          Known for his vision, leadership, and contributions to engineering
          education.
        </motion.p>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex justify-center lg:justify-start"
        >
          <a
            href="/cv.docx" // <-- Put cv.pdf inside public/ folder
            // download
            className={`inline-flex items-center px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base ${theme.button} ${theme.buttonHover} transition`}
          >
            <FaDownload className="mr-2" /> Download CV
          </a>
        </motion.div>
      </div>

      {/* Right Side - Profile Photo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex-shrink-0 relative"
      >
        <div
          className={`p-2 rounded-full bg-white shadow-lg border-4 ${theme.primary}`}
        >
          <img
            src="/profile.png"
            alt="Dr. Sandeep Tiwari"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover"
          />
        </div>
        {/* Decorative Circle (visible only on medium+) */}
        <div className="absolute -top-3 -right-3 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full shadow-lg hidden md:block"></div>
      </motion.div>
    </motion.section>
  );
}
