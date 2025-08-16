import { motion } from "framer-motion";
import { FaLightbulb, FaCertificate } from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import { useNavigate } from "react-router-dom";

export default function PatentSection() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16"
      id="patents"
    >
      {/* Section Heading */}
      <motion.h2
        className={`text-3xl font-bold mb-6 ${theme.primary} flex items-center`}
      >
        <FaLightbulb className="mr-3" /> Patents
      </motion.h2>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`${theme.cardBg} p-6 rounded-lg ${theme.shadow} text-center`}
        >
          <FaCertificate
            className={`text-4xl mb-3 mx-auto ${theme.secondary}`}
          />
          <h3 className={`text-lg font-semibold ${theme.text}`}>
            Granted Patents
          </h3>
          <p className={theme.accent}>2 Patents Granted</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`${theme.cardBg} p-6 rounded-lg ${theme.shadow} text-center`}
        >
          <FaLightbulb className={`text-4xl mb-3 mx-auto ${theme.secondary}`} />
          <h3 className={`text-lg font-semibold ${theme.text}`}>
            Applied Patents
          </h3>
          <p className={theme.accent}>3 Patents Filed</p>
        </motion.div>
      </div>

      {/* Featured Patents */}
      <motion.div
        className={`${theme.cardBg} p-6 rounded-lg ${theme.shadow}`}
        whileHover={{ y: -5 }}
      >
        <h3 className={`text-xl font-semibold mb-4 ${theme.primary}`}>
          Featured Patents
        </h3>

        <ul className="space-y-4">
          <motion.li
            whileHover={{ scale: 1.02 }}
            className={`p-4 rounded-lg border-l-4 ${theme.secondary} ${theme.background}`}
          >
            <p className={`${theme.text} font-medium`}>
              System and Method for Environmentally Conscious Machining
            </p>
            <p className={`${theme.accent} text-sm`}>Granted – 2018</p>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.02 }}
            className={`p-4 rounded-lg border-l-4 ${theme.secondary} ${theme.background}`}
          >
            <p className={`${theme.text} font-medium`}>
              Advanced Coolant Disposal System for Sustainable Manufacturing
            </p>
            <p className={`${theme.accent} text-sm`}>Filed – 2020</p>
          </motion.li>
        </ul>

        {/* Read More Button */}
        <div className="mt-6 text-right">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/patents")}
            className={`px-5 py-2 rounded-md ${theme.button} font-medium ${theme.shadow} ${theme.buttonHover}`}
          >
            Read More →
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
}
