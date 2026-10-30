import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaArrowLeft, FaCompass } from "react-icons/fa";
import { useTheme } from "../context/themeContext";

export default function NotFound() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Publications", path: "/publications" },
    { name: "Patents", path: "/patents" },
    { name: "Awards", path: "/awards" },
    { name: "Achievements", path: "/achievements" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto px-4 py-16 sm:py-24 text-center min-h-[65vh] flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
        className="mb-4"
      >
        <span
          className={`text-7xl sm:text-9xl font-extrabold tracking-tight ${theme.primary} select-none`}
        >
          404
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        <h1 className={`text-2xl sm:text-3xl font-bold mb-3 ${theme.text}`}>
          Page Not Found
        </h1>
        <p
          className={`max-w-md mx-auto text-sm sm:text-base ${theme.accent} mb-8 leading-relaxed`}
        >
          The page you are looking for might have been moved, renamed, or does
          not exist.
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="flex flex-wrap justify-center gap-4 mb-10"
      >
        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleBack}
          className={`inline-flex items-center px-5 py-2.5 rounded-lg border ${theme.border} ${theme.cardBg} ${theme.text} hover:${theme.primary} ${theme.shadow} font-medium text-sm transition cursor-pointer`}
          aria-label="Go back to previous page"
        >
          <FaArrowLeft className="mr-2 text-xs" /> Go Back
        </motion.button>

        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link
            to="/"
            className={`inline-flex items-center px-5 py-2.5 rounded-lg ${theme.button} ${theme.buttonHover} font-medium text-sm ${theme.shadow} transition cursor-pointer`}
          >
            <FaHome className="mr-2 text-base" /> Return Home
          </Link>
        </motion.div>
      </motion.div>

      {/* Helpful Quick Links Card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className={`${theme.cardBg} ${theme.border} border ${theme.shadow} p-5 sm:p-6 rounded-xl max-w-lg w-full`}
      >
        <p
          className={`text-xs sm:text-sm font-semibold mb-3 ${theme.text} flex items-center justify-center gap-2`}
        >
          <FaCompass className={theme.secondary} /> Popular Destinations
        </p>
        <div className="flex flex-wrap justify-center items-center gap-2 text-xs sm:text-sm">
          {quickLinks.map((item, idx) => (
            <div key={item.path} className="flex items-center">
              <Link
                to={item.path}
                className={`${theme.accent} hover:${theme.primary} font-medium transition px-1.5 py-1 rounded`}
              >
                {item.name}
              </Link>
              {idx < quickLinks.length - 1 && (
                <span className={`${theme.accent} opacity-40 ml-2`}>•</span>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
