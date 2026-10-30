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
      className="mb-10 sm:mb-16"
      id="patents"
    >
      {/* Section Heading */}
      <motion.h2
        className={`text-3xl font-bold mb-6 ${theme.primary} flex items-center`}
      >
        <FaLightbulb className="mr-3" /> Patents & Intellectual Property
      </motion.h2>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className={`${theme.cardBg} p-6 rounded-lg ${theme.shadow} border ${theme.border} text-center`}
        >
          <FaCertificate
            className={`text-4xl mb-3 mx-auto ${theme.secondary}`}
          />
          <h3 className={`text-lg font-semibold ${theme.text}`}>
            Granted Patents
          </h3>
          <p className={`text-2xl font-bold ${theme.primary} my-1`}>4 Patents</p>
          <p className={`${theme.accent} text-xs`}>Granted by Government Patent Offices</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className={`${theme.cardBg} p-6 rounded-lg ${theme.shadow} border ${theme.border} text-center`}
        >
          <FaLightbulb className={`text-4xl mb-3 mx-auto ${theme.secondary}`} />
          <h3 className={`text-lg font-semibold ${theme.text}`}>
            Applied & Published Patents
          </h3>
          <p className={`text-2xl font-bold ${theme.primary} my-1`}>4 Patents</p>
          <p className={`${theme.accent} text-xs`}>Agribot, advanced coolants & smart tooling</p>
        </motion.div>
      </div>

      {/* Featured Patents */}
      <motion.div
        className={`${theme.cardBg} p-6 rounded-lg ${theme.shadow} border ${theme.border}`}
        whileHover={{ y: -5 }}
      >
        <h3 className={`text-xl font-semibold mb-4 ${theme.primary}`}>
          Featured Patents
        </h3>

        <ul className="space-y-4">
          <motion.li
            whileHover={{ scale: 1.01 }}
            className={`p-4 rounded-lg border-l-4 ${theme.secondary} ${theme.background} border ${theme.border}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p className={`${theme.text} font-medium`}>
                Optimized Air-Fuel Mixing & Filtering Device (AFMFD) for Enhanced Fuel Efficiency in Spark Ignition Engines
              </p>
              <span className={`text-xs font-semibold ${theme.secondaryText} whitespace-nowrap mt-1 sm:mt-0`}>
                Granted (Patent No. 598967)
              </span>
            </div>
            <p className={`${theme.accent} text-xs mt-1`}>
              Govt. of India Patent Office | Application 202311051115
            </p>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.01 }}
            className={`p-4 rounded-lg border-l-4 ${theme.secondary} ${theme.background} border ${theme.border}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p className={`${theme.text} font-medium`}>
                An Electric Vehicle Acceleration Enhancer System
              </p>
              <span className={`text-xs font-semibold ${theme.secondaryText} whitespace-nowrap mt-1 sm:mt-0`}>
                Granted (Patent No. 583554)
              </span>
            </div>
            <p className={`${theme.accent} text-xs mt-1`}>
              National Product Patent | EV torque & energy conservation
            </p>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.01 }}
            className={`p-4 rounded-lg border-l-4 ${theme.secondary} ${theme.background} border ${theme.border}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p className={`${theme.text} font-medium`}>
                System and Method for Environmentally Conscious Machining
              </p>
              <span className={`text-xs font-semibold ${theme.secondaryText} whitespace-nowrap mt-1 sm:mt-0`}>
                Granted (2018)
              </span>
            </div>
            <p className={`${theme.accent} text-xs mt-1`}>
              Eco-friendly manufacturing & sustainable coolant recycling
            </p>
          </motion.li>
        </ul>

        {/* Read More Button */}
        <div className="mt-6 text-right">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/patents")}
            className={`px-5 py-2 rounded-md ${theme.button} font-medium ${theme.shadow} ${theme.buttonHover}`}
          >
            View All Patents →
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
}
