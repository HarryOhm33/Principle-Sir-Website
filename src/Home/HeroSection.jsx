import { motion } from "framer-motion";
import { useTheme } from "../context/themeContext";

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-28 mt-28 mb-32 px-4 md:px-12"
    >
      {/* Left Side - Text Content */}
      <div className="text-center md:text-left max-w-2xl">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`text-4xl md:text-5xl font-bold ${theme.text}`}
        >
          Prof. (Dr.) Sandeep Tiwari
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`text-lg md:text-xl mt-2 ${theme.primary} font-semibold`}
        >
          Principal, Darbhanga College of Engineering
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={`mt-4 ${theme.accent} leading-relaxed`}
        >
          Distinguished academic leader with 25+ years in education, 16 years in
          cutting-edge research, and 5 years of valuable industry experience.
          Known for his vision, leadership, and contributions to engineering
          education.
        </motion.p>
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
            className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover"
          />
        </div>
        {/* Decorative Circle */}
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 rounded-full shadow-lg hidden md:block"></div>
      </motion.div>
    </motion.section>
  );
}
