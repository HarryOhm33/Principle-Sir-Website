import { motion } from "framer-motion";
import { FaAward, FaUserGraduate } from "react-icons/fa";
import { useTheme } from "../context/themeContext";

export default function AchievementsSection() {
  const { theme } = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16"
      id="achievements"
    >
      <motion.h2
        className={`text-3xl font-bold mb-6 ${theme.primary} flex items-center`}
      >
        <FaAward className="mr-3" /> Achievements
      </motion.h2>

      <motion.div
        className={`${theme.cardBg} p-6 rounded-lg ${theme.shadow}`}
        whileHover={{ y: -5 }}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div whileHover={{ scale: 1.01 }}>
            <h3 className={`text-xl font-semibold mb-4 ${theme.primary}`}>
              Awards & Honors
            </h3>
            <ul className="space-y-3">
              <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                <span
                  className={`${theme.secondary} bg-opacity-20 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs`}
                >
                  ★
                </span>
                <span className={theme.text}>
                  Global Education Award by IYF, South Korea (2019)
                </span>
              </motion.li>

              <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                <span
                  className={`${theme.secondary} bg-opacity-20 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs`}
                >
                  ★
                </span>
                <span className={theme.text}>
                  CMI Level 5 Award in Management and Leadership
                </span>
              </motion.li>

              <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                <span
                  className={`${theme.secondary} bg-opacity-20 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs`}
                >
                  ★
                </span>
                <span className={theme.text}>
                  Appointed as Margdarshak in AICTE for NBA
                </span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ scale: 1.01 }}>
            <h3
              className={`text-xl font-semibold mb-4 ${theme.primary} flex items-center`}
            >
              <FaUserGraduate className="mr-2" /> Research Guidance
            </h3>
            <ul className="space-y-3">
              <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                <span
                  className={`${theme.secondary} bg-opacity-20 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs`}
                >
                  5
                </span>
                <span className={theme.text}>Ph.D. Degrees Awarded</span>
              </motion.li>

              <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                <span
                  className={`${theme.secondary} bg-opacity-20 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs`}
                >
                  1
                </span>
                <span className={theme.text}>Ph.D. Pursuing</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
