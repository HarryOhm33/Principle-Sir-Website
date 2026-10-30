import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../context/themeContext";

export default function BackButton({ label = "Back" }) {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <motion.button
      type="button"
      whileHover={{ x: -4 }}
      whileTap={{ scale: 0.96 }}
      onClick={handleBack}
      className={`inline-flex items-center text-xs sm:text-sm font-semibold mb-4 sm:mb-6 px-3.5 py-1.5 rounded-lg border ${theme.border} ${theme.cardBg} ${theme.text} hover:${theme.primary} ${theme.shadow} transition-all cursor-pointer`}
      aria-label="Go back"
    >
      <FaArrowLeft className="mr-2 text-xs" />
      <span>{label}</span>
    </motion.button>
  );
}

