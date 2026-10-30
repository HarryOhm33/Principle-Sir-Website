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
      className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16 mt-4 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 mb-10 sm:mb-16 md:mb-20 lg:mb-40 xl:mb-52 lg:min-h-[calc(100vh-14rem)] px-2 sm:px-4 md:px-8"
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-2 space-y-1"
        >
          <p className={`text-base sm:text-lg lg:text-xl ${theme.primary} font-semibold`}>
            Director, Sub Regional Science City and Innovation Hub, Bodh Gaya
          </p>
          <p className={`text-sm sm:text-base ${theme.accent} font-medium`}>
            Principal, Government Engineering College, Sheikhpura (DSTTE Bihar)
          </p>
          <p className={`text-xs sm:text-sm ${theme.accent}`}>
            Former Principal, Darbhanga College of Engineering
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={`mt-4 ${theme.accent} leading-relaxed text-sm sm:text-base`}
        >
          Senior academic administrator, mechanical engineering researcher, and leader in
          innovation, incubation and entrepreneurship, with 30+ years in academia (more than a decade as Director or Principal) and 5 in industry. Recognized for mobilizing ₹10+ crore in institutional funds, driving national accreditation, and establishing advanced technology hubs.
        </motion.p>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex justify-center lg:justify-start"
        >
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base ${theme.button} ${theme.buttonHover} transition cursor-pointer`}
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
            alt="Prof. (Dr.) Sandeep Tiwari"
            className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover"
          />
        </div>
        {/* Decorative Circle (visible only on medium+) */}
        <div className="absolute -top-3 -right-3 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full shadow-lg hidden md:block"></div>
      </motion.div>
    </motion.section>
  );
}
