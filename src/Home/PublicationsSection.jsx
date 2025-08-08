import { motion } from "framer-motion";
import { FaBook } from "react-icons/fa";
import { useTheme } from "../context/themeContext";

export default function PublicationsSection() {
  const { theme } = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16"
      id="publications"
    >
      <motion.h2
        className={`text-3xl font-bold mb-6 ${theme.primary} flex items-center`}
      >
        <FaBook className="mr-3" /> Publications
      </motion.h2>

      <motion.div
        className={`${theme.cardBg} p-6 rounded-lg ${theme.shadow}`}
        whileHover={{ y: -5 }}
      >
        <motion.h3 className={`text-xl font-semibold mb-4 ${theme.primary}`}>
          Research Highlights
        </motion.h3>

        <ul className="space-y-3">
          <motion.li className="flex items-start" whileHover={{ x: 5 }}>
            <span
              className={`${theme.secondary} bg-opacity-20 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0`}
            >
              22+
            </span>
            <span className={theme.text}>
              International Journal Publications
            </span>
          </motion.li>

          <motion.li className="flex items-start" whileHover={{ x: 5 }}>
            <span
              className={`${theme.secondary} bg-opacity-20 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0`}
            >
              7+
            </span>
            <span className={theme.text}>National Journal Publications</span>
          </motion.li>

          <motion.li className="flex items-start" whileHover={{ x: 5 }}>
            <span
              className={`${theme.secondary} bg-opacity-20 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0`}
            >
              15+
            </span>
            <span className={theme.text}>International Conference Papers</span>
          </motion.li>

          <motion.li className="flex items-start" whileHover={{ x: 5 }}>
            <span
              className={`${theme.secondary} bg-opacity-20 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0`}
            >
              6+
            </span>
            <span className={theme.text}>National Conference Papers</span>
          </motion.li>
        </ul>

        <motion.div className="mt-6" whileHover={{ scale: 1.05 }}>
          <a
            href="#publications"
            className={`inline-flex items-center px-4 py-2 ${theme.button} rounded ${theme.buttonHover} transition`}
          >
            View All Publications
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
