import { motion } from "framer-motion";
import { FaFlask } from "react-icons/fa";
import { useTheme } from "../context/themeContext";

export default function ProjectsSection() {
  const { theme } = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16"
      id="projects"
    >
      <motion.h2
        className={`text-3xl font-bold mb-6 ${theme.primary} flex items-center`}
      >
        <FaFlask className="mr-3" /> Projects
      </motion.h2>

      <motion.div
        className={`${theme.cardBg} p-6 rounded-lg ${theme.shadow}`}
        whileHover={{ y: -5 }}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            className={`border ${theme.border} p-4 rounded-lg`}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className={`font-semibold text-lg ${theme.primary}`}>
              3D Printing & Additive Manufacturing
            </h3>
            <p className={`${theme.accent} mt-2`}>
              Co-PI for MeitY project with ₹54.48 Crore budget
            </p>
          </motion.div>

          <motion.div
            className={`border ${theme.border} p-4 rounded-lg`}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className={`font-semibold text-lg ${theme.primary}`}>
              IoT & Drone based Agriculture Monitoring
            </h3>
            <p className={`${theme.accent} mt-2`}>
              Co-PI for MMMUT project with ₹44.648 Lakh grant
            </p>
          </motion.div>
        </div>

        <motion.div className="mt-6">
          <h3 className={`text-xl font-semibold mb-4 ${theme.primary}`}>
            Patents
          </h3>
          <ul className="space-y-2">
            <motion.li className="flex items-start" whileHover={{ x: 5 }}>
              <span
                className={`${theme.secondary} bg-opacity-20 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs`}
              >
                1
              </span>
              <span className={theme.text}>
                Design and Development of Multifunctional Agribot
              </span>
            </motion.li>

            <motion.li className="flex items-start" whileHover={{ x: 5 }}>
              <span
                className={`${theme.secondary} bg-opacity-20 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs`}
              >
                2
              </span>
              <span className={theme.text}>
                Optimised Air Fuel Mixing and Filtering device
              </span>
            </motion.li>

            <motion.li className="flex items-start" whileHover={{ x: 5 }}>
              <span
                className={`${theme.secondary} bg-opacity-20 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs`}
              >
                3
              </span>
              <span className={theme.text}>
                Special Design Sprocket with Chain Support
              </span>
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
